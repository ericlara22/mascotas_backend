const express = require('express');
const router = express.Router();
const {AnimalController: animals} = require('../controllers');

router.get('/', animals.findAll)
router.get('/:id', animals.findOne)
router.post('/', animals.create)
router.put('/:id', animals.update)
router.delete('/:id', animals.delete)




module.exports = router;