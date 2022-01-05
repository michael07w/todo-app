"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const typebox_1 = require("@sinclair/typebox");
// Define schema
const TaskList = typebox_1.Type.String(typebox_1.Type.Array(typebox_1.Type.Object({
    title: typebox_1.Type.String(),
    id: typebox_1.Type.String(),
    done: typebox_1.Type.Boolean()
})));
// Instantiate server
const server = (0, fastify_1.default)();
// Define response to GET request
server.get('/', async (request, reply) => {
    reply.header('Access-Control-Allow-Origin', '*').send('success\n');
});
// Define action to POST request WITH TYPES
server.post('/', {
    schema: {
        body: TaskList,
        response: {
            200: TaskList
        },
    },
}, (request, reply) => {
    const { body: tasks } = request;
    reply.header('Access-Control-Allow-Origin', '*').status(200).send(tasks);
});
/**
// Define action to POST request WITHOUT TYPES
server.post('/', async(request, reply) => {
    const { body: tasks } = request
    console.log(tasks)
    reply.header('Access-Control-Allow-Origin', '*').status(200).send(tasks)
})
*/
server.listen(8080, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
