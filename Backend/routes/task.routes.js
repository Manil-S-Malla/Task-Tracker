const taskController = require('../controllers/task.controllers');
const router = require('express').Router();

router.route('/').get(taskController.findAllTasks);
router.route('/add').post(taskController.createTask);
router.route('/:id').get(taskController.findTaskById);
router.route('/:id').delete(taskController.deleteTask);
router.route('/update/:id').put(taskController.updateTask);

module.exports = router;