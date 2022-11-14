module.exports = (sequelize, DataTypes) => {

    const RazaModel = sequelize.define('raza', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return RazaModel;

};