import fs from 'fs'
import path from 'path'
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fastifyCors from 'fastify-cors'
import mercurius, { IResolvers } from 'mercurius'

// Instantiate server
const server: FastifyInstance = fastify()

// Array to store tasks
let tasks = [{
    id: 'task-0',
    description: 'Brush Teeth!',
    done: false
}]

// Define resolvers
const resolvers: IResolvers = {
    Query: {
        task_list: () => tasks
    },
    Mutation: {
        add: (parent, args) => {
            let idCount = tasks.length

            const task = {
                id: `task-${idCount}`,
                description: args.description,
                done: false
            }
            tasks.push(task)
            return tasks
        },
        finish: (parent, args) => {
            const finished_task = tasks.find(task => task.id === args.id)
            if (!finished_task)
                return finished_task
            finished_task.done = !finished_task.done
            return finished_task
        }
    }, 
    Task: {
        id: (parent) => parent.id,
        description: (parent) => parent.description
    }
}

// Register fastifyCors plugin to enable use of CORS
server.register(fastifyCors, {
    origin: '*'
})

// Register mercurius as a plugin
server.register(mercurius, {
    schema: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
})

server.listen(8080, (err, address) => {
    if(err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})