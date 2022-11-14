module.exports = (sequelize, DataTypes) => {

    const SexoModel = sequelize.define('sexo', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return SexoModel;

};