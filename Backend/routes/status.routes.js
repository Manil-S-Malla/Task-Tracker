const statusController = require('../controllers/status.controllers');
const router = require('express').Router();

router.route('/').get(statusController.findAllStatuses);
router.route('/add').post(statusController.createStatus);
router.route('/:id').get(statusController.findStatusById);
router.route('/:id').delete(statusController.deleteStatus);
router.route('/update/:id').put(statusController.updateStatus);

module.exports = router;