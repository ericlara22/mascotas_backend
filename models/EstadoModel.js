module.exports = (sequelize, DataTypes) => {

    const EstadoModel = sequelize.define('estado', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return EstadoModel;

};