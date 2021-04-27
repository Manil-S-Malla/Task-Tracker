const userController = require('../controllers/user.controllers');
const router = require('express').Router();

router.route('/').get(userController.findAllUsers);
router.route('/add').post(userController.createUser);
router.route('/:id').get(userController.findUserById);
router.route('/:id').delete(userController.deleteUser);
router.route('/update/:id').put(userController.updateUser);

module.exports = router;