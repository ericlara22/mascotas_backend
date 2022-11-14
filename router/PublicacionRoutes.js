const express = require('express');
const router = express.Router();
const {PublicacionController} = require('../controllers');

router.get('/', PublicacionController.findAll);
router.get('/:id', PublicacionController.findOne);

module.exports = router;