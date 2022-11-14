const express = require('express');
const router = express.Router();
const {userController} = require('../controllers');

router.get('/', userController.getAllUsers);
router.get('/user', userController.getUserByRut);
router.post('/', userController.createUser);
router.put('/:id', userController.editUser);

router.get('/:id', userController.getUserById);

module.exports = router;