"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
var fastify_nextjs_1 = require("fastify-nextjs");
// Instantiate fastify framework
var fastify = (0, fastify_1["default"])({ logger: true });
// Add next.js plugin and load home page
fastify
    .register(fastify_nextjs_1["default"])
    .after(function () { return fastify.next("/"); });
// Start server
fastify.listen(3000, function () {
    fastify.log.info("Listening on http://localhost:3000");
});
