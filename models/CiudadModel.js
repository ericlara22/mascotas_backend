module.exports = (sequelize, DataTypes) => {

    const CiudadModel = sequelize.define('ciudad', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return CiudadModel;

};