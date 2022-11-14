const express = require('express');
const router = express.Router();
const {userController} = require('../controllers');

router.get('/', userController.findAll);
router.get('/:id', userController.findById);
router.post('/', userController.create);
router.put('/:id', userController.update);


module.exports = router;