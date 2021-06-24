let Task = require('../models/task.model');

const findAllTasks = (req, res) => {
    Task.find()
        .then( tasks => res.json(tasks))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const createTask = (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const softDeadline = req.body.softDeadline;
    const hardDeadline = req.body.hardDeadline;
    const finishedDate = req.body.finishedDate;
    const status = req.body.status;
    const user = req.body.user;
    
    const newTask = new Task({
        name,
        description,
        softDeadline,
        hardDeadline,
        finishedDate,
        status,
        user,
    });

    newTask.save()
        .then( () => res.json(`Task ${name} Added.`))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const findTaskById = (req, res) => {
    Task.findById(req.params.id)
        .then( task => 
            task === null ? 
                res.status(404).json(`Task with Id ${req.params.id} does not exists.`) : 
                res.json(task)
        )
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const findTasksByUserId = (req, res) => {
    Task.find({user: req.params.userId})
        .then( task => 
            task === null ? 
                res.status(404).json(`Task with User Id ${req.params.userId} does not exists.`) : 
                res.json(task)
        )
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then( () => res.json(`Task ${req.params.id} deleted.`))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const updateTask = (req, res) => {
    Task.findById(req.params.id)
        .then( task => {
            task.name = req.body.name;
            task.description = req.body.description;
            task.softDeadline = req.body.softDeadline;
            task.hardDeadline = req.body.hardDeadline;
            task.finishedDate = req.body.finishedDate;
            task.status = req.body.status;
            task.user = req.body.user;

            task.save()
                .then(() => res.json(`Task ${req.params.id} updated.`))
                .catch( err => res.status(400).json(`Error: ${err}`));
        })
        .catch( err => res.status(400).json(`Error: ${err}`));
};

exports.findAllTasks = findAllTasks;
exports.createTask = createTask;
exports.findTaskById = findTaskById;
exports.findTasksByUserId = findTasksByUserId;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;