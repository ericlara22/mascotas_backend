module.exports = (sequelize, DataTypes) => {

    const PaisModel = sequelize.define('pais', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return PaisModel;

};