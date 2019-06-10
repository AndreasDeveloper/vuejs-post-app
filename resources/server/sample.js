// // Importing Dependencies
// const Hapi = require('@hapi/hapi'),
//       cors = require('cors'),
//       Path = require('path'),
//       mongoose = require('mongoose');
// // Importing Models
// const Task = require('./models/Tasks');

// // Setting Up MongoDB
// mongoose.connect('mongodb://localhost/hapidb')
//     .then(() => console.log('MongoDB Connected..'))
//     .catch(err => console.error(err));

// // Initializing Server
// const init = async () => {
//     // Server Init
//     const server = Hapi.server({ port: 3000, host: 'localhost',
//         routes: {
//             files: {
//                 relativeTo: Path.join(__dirname, '../public')
//             }
//         }
//     });

//     // Setting Up Dependencies/Modules
//     await server.register(require('inert'));
//     await server.register(require('vision'));

//     // Setting Up View Engine
//     server.views({
//         engines: {
//             html: require('handlebars')
//         },
//         relativeTo: __dirname,
//         path: '../templates'
//     });

//     // -- ROUTES -- \\
//     // GET - Home Page
//     server.route({
//         method: 'GET',
//         path: '/',
//         handler: (request, reply) => {
//             return reply.view('index', { name: 'John Doe' });
//         }
//     });
//     // GET - About Page
//     server.route({
//        method: 'GET',
//        path: '/about',
//        handler: (request, reply) => {
//            return reply.view('about');
//        } 
//     });
//     // GET - Tasks Page
//     server.route({
//         method: 'GET',
//         path: '/tasks',
//         handler: async (request, reply) => {
//             const allTasks = await Task.find();
//             return reply.view('tasks', { tasks: allTasks });
//         }
//     });
//     // POST - Add new Task
//     server.route({
//         method: 'POST',
//         path: '/tasks',
//         handler: async (request, reply) => {
//             try {
//                 let text = request.payload.text; // Getting body from post request
//                 let newTask = new Task({ text: text });
//                 const savedNewTask = await newTask.save();
//                 return reply.redirect().location('tasks');
//             } catch (err) {
//                 throw new Error(err);
//             }
//         }
//     });
    
//     // Starting Server
//     await server.start();
//     console.log(`Server started at: ${server.info.uri}`);
// };

// // Process on rejection (error handling)
// process.on('unhandledRejection', (err) => {
//     if (err) {
//         throw new Error(err);
//     } 
//     process.exit();
// });
// init(); // Calling Init