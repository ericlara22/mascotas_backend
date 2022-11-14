module.exports = (sequelize, DataTypes) => {

    const ComunaModel = sequelize.define('comuna', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return ComunaModel;

};