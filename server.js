'use strict'

const hapi = require('hapi');

const server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: 8080
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function(req, reply){
        return reply('Hello!')
    }
});

server.start((error) => {
    if (error)
        throw error;
    console.log('Running at: ' + server.info.uri);
});