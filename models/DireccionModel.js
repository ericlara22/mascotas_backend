module.exports = (sequelize, DataTypes) => {

    const DireccionModel = sequelize.define('direccion', 
    {
        nombre: DataTypes.STRING,
        numero: DataTypes.INTEGER
    },
    {
        freezeTableName: true
    });

    return DireccionModel;

};