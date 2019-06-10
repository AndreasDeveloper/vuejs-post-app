// Importing Dependencies
const mongoose = require('mongoose');

// Task Schema
const TaskSchema = new mongoose.Schema({
    text: String
});
// Implementing Schema to a Model
const Task = mongoose.model('Task', TaskSchema);

// Exporting Task Model
module.exports = Task;