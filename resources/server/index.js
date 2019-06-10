// Importing Dependencies
const Hapi = require('@hapi/hapi'),
    cors = require('cors'),
    Path = require('path'),
    mongoose = require('mongoose');
// Importing Routes
const postRoutes = require('./routes/api/posts');

// Initializing Server
const init = async () => {
    // Server Init
    const server = Hapi.server({
        port: 3000, host: 'localhost', routes: {
            cors: true
        }
    });

    // Post Routes
    postRoutes(server);

    // Starting Server
    await server.start();
    console.log(`Server started at: ${server.info.uri}`);
};

// Process on rejection (error handling)
process.on('unhandledRejection', (err) => {
    if (err) {
        throw new Error(err);
    } 
    process.exit();
});
init(); // Calling Init