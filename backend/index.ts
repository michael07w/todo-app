import fastify, { FastifyInstance } from 'fastify'
// Will use packages below when implementing schema types
// import { Static, Type } from '@sinclair/typebox'

// Instantiate server
const server: FastifyInstance = fastify()

// Define response to GET request
server.get('/', async(request, reply) => {
    reply.header('Access-Control-Allow-Origin', '*').send('success\n')
})

// Define action to POST request WITHOUT TYPES
server.post('/', async(request, reply) => {
    const { body: tasks } = request
    console.log(tasks)
    reply.header('Access-Control-Allow-Origin', '*').status(200).send(tasks)
})

server.listen(8080, (err, address) => {
    if(err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})