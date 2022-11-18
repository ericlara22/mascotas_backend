const express  = require('express');
const authentication = require('../middlewares/authentication');

const Users = require('./UserRoutes');
const Animales = require('./AnimalRoutes');
const CategoriaMascotas = require('./CategoriaMascotaRoutes');
const CategoriaPublicaciones = require('./CategoriaPublicacionRoutes');
const Ciudades = require('./CiudadRoutes');
const Colores = require('./ColorRoutes');
const Comunas = require('./ComunaRoutes');
const Direcciones = require('./DireccionRoutes');
const Edades = require('./EdadRoutes');
const Estados = require('./EstadoRoutes');
const Paises = require('./PaisRoutes');
const Personas = require('./PersonaRoutes');
const Publicaciones = require('./PublicacionRoutes');
const Razas = require('./RazaRoutes');
const Sexos = require('./SexoRoutes');
const Telefonos = require('./TelefonoRoutes');

const app = express();

app.use('/users', Users );
app.use('/animales', Animales );
app.use('/categoriaMascotas', CategoriaMascotas );
app.use('/categoriaPublicaciones', CategoriaPublicaciones );
app.use('/ciudades', Ciudades );
app.use('/colores', Colores );
app.use('/comunas', Comunas );
app.use('/direcciones', Direcciones );
app.use('/edades', Edades );
app.use('/estados', Estados );
app.use('/paises', Paises );
app.use('/personas', Personas );
app.use('/publicaciones', Publicaciones );
app.use('/Razas', Razas );
app.use('/sexos', Sexos );
app.use('/telefonos', Telefonos );

module.exports = app;