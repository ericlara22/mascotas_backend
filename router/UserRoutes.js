const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');
const {userController: users} = require('../controllers');

router.get('/', users.findAll);
router.get('/:id', users.findOne);
router.post('/', users.create);
router.put('/:id', authentication, users.update);


module.exports = router;