"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const fastify_1 = __importDefault(require("fastify"));
const mercurius_1 = __importDefault(require("mercurius"));
// Instantiate server
const server = (0, fastify_1.default)();
// Array to store tasks
let tasks = [{
        id: 'task-0',
        description: 'Brush Teeth!',
        done: false
    }];
// Define resolvers
const resolvers = {
    Query: {
        task_list: () => tasks
    },
    Mutation: {
        add: (parent, args) => {
            let idCount = tasks.length;
            const task = {
                id: `task-${idCount}`,
                description: args.description,
                done: false
            };
            tasks.push(task);
            return task;
        },
        finish: (parent, args) => {
            const finished_task = tasks.find(task => task.id === args.id);
            if (!finished_task)
                return finished_task;
            finished_task.done = !finished_task.done;
            return finished_task;
        }
    },
    Task: {
        id: (parent) => parent.id,
        description: (parent) => parent.description
    }
};
// Register mercurius as a plugin
server.register(mercurius_1.default, {
    schema: fs_1.default.readFileSync(path_1.default.join(__dirname, 'schema.graphql'), 'utf8'),
    resolvers,
});
server.listen(8080, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
