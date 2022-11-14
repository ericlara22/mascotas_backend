const controllers = {};

controllers.userController = require('./UserController');
controllers.AnimalController = require('./AnimalController');
controllers.CategoriaMascotaController = require('./CategoriaMascotaController');
controllers.CategoriaPublicacionController = require('./CategoriaPublicacionController');
controllers.CiudadController = require('./CiudadController');
controllers.ColorController = require('./ColorController');
controllers.ComunaController = require('./ComunaController');
controllers.DireccionController = require('./DireccionController');
controllers.EdadController = require('./EdadController');
controllers.EstadoController = require('./EstadoController');
controllers.PaisController = require('./PaisController');
controllers.PersonaController = require('./PersonaController');
controllers.PublicacionController = require('./PublicacionController');
controllers.RazaController = require('./RazaController');
controllers.SexoController = require('./SexoController');
controllers.TelefonoController = require('./TelefonoController');

module.exports = controllers;