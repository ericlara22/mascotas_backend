module.exports = (sequelize, DataTypes) => {

    const CategoriaMascotaModel = sequelize.define('categoria_mascota', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return CategoriaMascotaModel;

};