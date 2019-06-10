// Importing Dependencies
const Hapi = require('@hapi/hapi'),
    mongoose = require('mongoose'),
    mongodb = require('mongodb');

// Post Routes Function
const postRoutes = async (server) => {

    // GET - Get Posts
    server.route({
        method: 'GET',
        path: '/api/posts',
        handler: async (request, reply) => {
            const posts = await loadPostsCollection();
            return await posts.find({}).toArray();
        }
    });

    // POST - Add new Post
    server.route({
        method: 'POST',
        path: '/api/posts',
        handler: async (request, reply) => {
            const posts = await loadPostsCollection();
            await posts.insertOne({
                text: request.payload.text,
                createdAt: new Date()
            });
            return reply.response('success').code(201);
        }
    });

    // DELETE - Delete Post
    server.route({
        method: 'DELETE',
        path: '/api/posts/{id}',
        handler: async (request, reply) => {
            const posts = await loadPostsCollection();
            await posts.deleteOne({_id: new mongodb.ObjectID(request.params.id)});
            return reply.response('success').code(200);
        }
    });

    // Setting up database
    async function loadPostsCollection() {
        const client = await mongodb.MongoClient.connect('mongodb://localhost/posts-app', {useNewUrlParser: true});
        return client.db('posts-app').collection('posts');
    };
};

module.exports = postRoutes;