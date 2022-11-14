const services = {};

services.UserService = require('./UserService');
services.AnimalService = require('./AnimalService');
services.CategoriaMascotaService = require('./CategoriaMascotaService');
services.CategoriaPublicacionService = require('./CategoriaPublicacionService');
services.CiudadService = require('./CiudadService');
services.ColorService = require('./ColorService');
services.ComunaService = require('./ComunaService');
services.DireccionService = require('./DireccionService');
services.EdadService = require('./EdadService');
services.EstadoService = require('./EstadoService');
services.PaisService = require('./PaisService');
services.PersonaService = require('./PersonaService');
services.PublicacionService = require('./PublicacionService');
services.RazaService = require('./RazaService');
services.SexoService = require('./SexoService');
services.TelefonoService = require('./TelefonoService');

module.exports = services;