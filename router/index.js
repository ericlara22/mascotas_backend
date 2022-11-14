const express  = require('express');
const Users = require('./UserRoutes');
const app = express();

app.use('/users', Users );

module.exports = app;