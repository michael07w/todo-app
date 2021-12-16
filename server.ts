import Fastify from 'fastify'
import fastifyNextJs from 'fastify-nextjs'

// Instantiate fastify framework
const fastify = Fastify({ logger: true })

// Add next.js plugin and load home page
fastify
    .register(fastifyNextJs)
    .after(() => fastify.next("/"))


// Start server
fastify.listen(3000, (err, address) => {
    if(err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})