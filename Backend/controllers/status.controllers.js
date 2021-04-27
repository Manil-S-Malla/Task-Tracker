let Status = require('../models/status.model');

const findAllStatuses = (req, res) => {
    Status.find()
        .then( statuses => res.json(statuses))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const createStatus = (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const style = req.body.style;
    

    const newStatus = new Status({
        name, 
        description,
        style, 
    });

    newStatus.save()
        .then( () => res.json(`Status ${name} Added.`))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const findStatusById = (req, res) => {
    Status.findById(req.params.id)
        .then( status => status === null ? 
            res.status(404).json(`Status with Id ${req.params.id} does not exists.`) : 
            res.json(status))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const deleteStatus = (req, res) => {
    Status.findByIdAndDelete(req.params.id)
        .then( () => res.json(`Status ${req.params.id} deleted.`))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const updateStatus = (req, res) => {
    Status.findById(req.params.id)
        .then( status => {
            status.name = req.body.name;
            status.description = req.body.description;
            status.style = req.body.style;

            status.save()
                .then(() => res.json(`Status ${req.params.id} updated.`))
                .catch( err => res.status(400).json(`Error: ${err}`));
        })
        .catch( err => res.status(400).json(`Error: ${err}`));
};

exports.findAllStatuses = findAllStatuses;
exports.createStatus = createStatus;
exports.findStatusById = findStatusById;
exports.deleteStatus = deleteStatus;
exports.updateStatus = updateStatus;


