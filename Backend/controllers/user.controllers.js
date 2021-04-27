let User = require('../models/user.model');

const findAllUsers = (req, res) => {
    User.find()
        .then( users => res.json(users))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const createUser = (req, res) => {
    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const familyname = req.body.familyname;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        name: {
            firstname, middlename, familyname
        }, 
        email,
        password, 
    });

    newUser.save()
        .then( () => res.json(`User ${firstname} Added.`))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const findUserById = (req, res) => {
    User.findById(req.params.id)
        .then( user => 
            user === null ? 
                res.status(404).json(`User with Id ${req.params.id} does not exists.`) : 
                res.json(user)
        )
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then( () => res.json(`User ${req.params.id} deleted.`))
        .catch( err => res.status(400).json(`Error: ${err}`));
};

const updateUser = (req, res) => {
    User.findById(req.params.id)
        .then( user => {
            firstname = req.body.firstname;
            middlename = req.body.middlename;
            familyname = req.body.familyname;
            user.name = {firstname, middlename, familyname}
            user.email = req.body.email;
            user.password = req.body.password;

            user.save()
                .then(() => res.json(`User ${req.params.id} updated.`))
                .catch( err => res.status(400).json(`Error: ${err}`));
        })
        .catch( err => res.status(400).json(`Error: ${err}`));
};

exports.findAllUsers = findAllUsers;
exports.createUser = createUser;
exports.findUserById = findUserById;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;


