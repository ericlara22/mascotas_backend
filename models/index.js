const {development} = require('../config/config.json');
const {database, username, password, host, dialect} = development;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect
});

const db = {};
db.sequelize = sequelize;
db.models = {};

/**
 * Llamado a los modelos y agregados a la BD
 */

db.models.UserModel = require('./UserModel')(sequelize, Sequelize.DataTypes);
db.models.EstadoModel = require('./EstadoModel')(sequelize, Sequelize.DataTypes);
db.models.UserDataModel = require('./UserDataModel')(sequelize, Sequelize.DataTypes);
db.models.AnimalModel = require('./AnimalModel')(sequelize, Sequelize.DataTypes);
db.models.CategoriaMascotaModel = require('./CategoriaMascotaModel')(sequelize, Sequelize.DataTypes);
db.models.CategoriaPublicacionModel = require('./CategoriaPublicacionModel')(sequelize, Sequelize.DataTypes);
db.models.CiudadModel = require('./CiudadModel')(sequelize, Sequelize.DataTypes);
db.models.ComunaModel = require('./ComunaModel')(sequelize, Sequelize.DataTypes);
db.models.DireccionModel = require('./DireccionModel')(sequelize, Sequelize.DataTypes);
db.models.EdadModel = require('./EdadModel')(sequelize, Sequelize.DataTypes);
db.models.PaisModel = require('./PaisModel')(sequelize, Sequelize.DataTypes);
db.models.PublicacionModel = require('./PublicacionModel')(sequelize, Sequelize.DataTypes);
db.models.RazaModel = require('./RazaModel')(sequelize, Sequelize.DataTypes);
db.models.SexoModel = require('./SexoModel')(sequelize, Sequelize.DataTypes);
db.models.TelefonoModel = require('./TelefonoModel')(sequelize, Sequelize.DataTypes);
db.models.ColorModel = require('./ColorModel')(sequelize, Sequelize.DataTypes);

/**
 * Associations
 */

/**
 * User
 */
db.models.EstadoModel.hasMany(db.models.UserModel,{onDelete: 'cascade'});
db.models.UserModel.belongsTo(db.models.EstadoModel, {onDelete: 'cascade'});
db.models.UserDataModel.hasOne(db.models.UserModel,{foreignKey:'userDataId', onDelete: 'cascade'});
db.models.UserModel.belongsTo(db.models.UserDataModel, {foreignKey:'userDataId',onDelete: 'cascade'});


/**
 * UserData
 */

 db.models.DireccionModel.hasMany(db.models.UserDataModel,{onDelete: 'cascade'});
 db.models.UserDataModel.belongsTo(db.models.DireccionModel, {onDelete: 'cascade'});
 db.models.TelefonoModel.hasMany(db.models.UserDataModel,{onDelete: 'cascade'});
 db.models.UserDataModel.belongsTo(db.models.TelefonoModel, {onDelete: 'cascade'});

/**
 * Publicacion
 */

db.models.UserModel.hasMany(db.models.PublicacionModel, {onDelete: 'cascade'});
db.models.PublicacionModel.belongsTo(db.models.UserModel, {onDelete: 'cascade'});
db.models.CategoriaPublicacionModel.hasMany(db.models.PublicacionModel, {onDelete: 'cascade'});
db.models.PublicacionModel.belongsTo(db.models.CategoriaPublicacionModel, {onDelete: 'cascade'});
db.models.EstadoModel.hasMany(db.models.PublicacionModel, {onDelete: 'cascade'});
db.models.PublicacionModel.belongsTo(db.models.EstadoModel, {onDelete: 'cascade'});
db.models.AnimalModel.hasMany(db.models.PublicacionModel, {onDelete: 'cascade'});
db.models.PublicacionModel.belongsTo(db.models.AnimalModel, {onDelete: 'cascade'});
db.models.ComunaModel.hasMany(db.models.PublicacionModel, {onDelete: 'cascade'});
db.models.PublicacionModel.belongsTo(db.models.ComunaModel, {onDelete: 'cascade'});

/**
 * Direccion
 */

db.models.ComunaModel.hasMany(db.models.DireccionModel, {onDelete: 'cascade'});
db.models.DireccionModel.belongsTo(db.models.ComunaModel, {onDelete: 'cascade'});

/**
 * Comuna
 */

db.models.CiudadModel.hasMany(db.models.ComunaModel, {onDelete: 'cascade'});
db.models.ComunaModel.belongsTo(db.models.CiudadModel, {onDelete: 'cascade'});

/**
 * Ciudad
 */

db.models.PaisModel.hasMany(db.models.CiudadModel, {onDelete: 'cascade'});
db.models.CiudadModel.belongsTo(db.models.PaisModel, {foreignKey:'paisId',onDelete: 'cascade'});

/**
 * Animal
 */

db.models.EdadModel.hasMany(db.models.AnimalModel, {onDelete: 'cascade'});
db.models.AnimalModel.belongsTo(db.models.EdadModel, {onDelete: 'cascade'});
db.models.RazaModel.hasMany(db.models.AnimalModel, {onDelete: 'cascade'});
db.models.AnimalModel.belongsTo(db.models.RazaModel, {onDelete: 'cascade'});
db.models.SexoModel.hasMany(db.models.AnimalModel, {onDelete: 'cascade'});
db.models.AnimalModel.belongsTo(db.models.SexoModel, {onDelete: 'cascade'});
db.models.CategoriaMascotaModel.hasMany(db.models.AnimalModel, {foreignKey:'categoriaMascotaId', onDelete: 'cascade'});
db.models.AnimalModel.belongsTo(db.models.CategoriaMascotaModel, {foreignKey:'categoriaMascotaId',onDelete: 'cascade'});
db.models.ColorModel.belongsToMany(db.models.AnimalModel, {through: 'animal_color',onDelete: 'cascade'});
db.models.AnimalModel.belongsToMany(db.models.ColorModel, {through: 'animal_color',onDelete: 'cascade'});


module.exports = db;