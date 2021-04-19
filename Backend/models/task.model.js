const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, "Task name is mandatory."],    
        minlength: [1, "Task name cannot be blank."],
        maxlength: [50, "Task name must be 50 characters at maximum."],
    },
    description: String,
    softDeadline: Date,
    hardDeadline: Date,
    finishedDate: Date,
}, {
    timestamps: true,   //  Adds createdAt and modifiedAt fields
});

const task = mongoose.model('task', taskSchema);

module.exports = task;