const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');
const {PublicacionController} = require('../controllers');


router.get('/', PublicacionController.findAll);
router.get('/:id', PublicacionController.findOne);
router.post('/', authentication, PublicacionController.create);
router.put('/disable/:id', authentication, PublicacionController.disable);
router.put('/:id', authentication, PublicacionController.update);

module.exports = router;