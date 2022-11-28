const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');
const imgUpload = require('../middlewares/uploadImage');
const {PublicacionController} = require('../controllers');


router.get('/', PublicacionController.findAll);
router.get('/:id', PublicacionController.findOne);
router.post('/', authentication, PublicacionController.create);
router.put('/disable/:id', authentication, PublicacionController.disable);
router.put('/:id', authentication, PublicacionController.update);
router.post('/:id/img', imgUpload.single('file'), PublicacionController.uploadImg);
router.delete('/:id/img', PublicacionController.deleteImg);

module.exports = router;