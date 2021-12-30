import fastify, { FastifyInstance } from 'fastify'
import { Static, Type } from '@sinclair/typebox'

// Define TaskList schema
const TaskList = Type.Array(
    Type.Object({
    title: Type.String(),
    id: Type.String(),
    done: Type.Boolean()
    })
)
type TaskListType = Static<typeof TaskList>

// Instantiate server
const server: FastifyInstance = fastify()

// Define response to GET request
server.get('/', async(request, reply) => {
    return 
})

// Define action to POST request
server.post<{ Body: TaskListType; Reply: TaskListType }>
('/', 
{
    schema: {
        body: TaskList,
        response: {
            200: TaskList,
        },
    },
}, 
async(request, reply) => {
    const { body: taskList } = request
    console.log(taskList)
    reply.header('Access-Control-Allow-Origin', '*').status(200).send(taskList)
})

server.listen(8080, (err, address) => {
    if(err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})