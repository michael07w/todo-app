import fastify, { FastifyInstance } from 'fastify'
import { Static, Type } from '@sinclair/typebox'

// Define schema
const TaskList = Type.String(
    Type.Array(
        Type.Object({
            title: Type.String(),
            id: Type.String(),
            done: Type.Boolean()
        })
    )
)
type TaskListType = Static<typeof TaskList>

// Instantiate server
const server: FastifyInstance = fastify()

// Define response to GET request
server.get('/', async(request, reply) => {
    reply.header('Access-Control-Allow-Origin', '*').send('success\n')
})

// Define action to POST request WITH TYPES
server.post<{ Body: TaskListType; Reply: TaskListType}>(
    '/',
    {
        schema: {
            body: TaskList,
            response: {
                200: TaskList
            },
        },
    },
    (request, reply) => {
        const { body: tasks } = request
        reply.header('Access-Control-Allow-Origin', '*').status(200).send(tasks)
    }
)

server.listen(8080, (err, address) => {
    if(err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})