module.exports = (sequelize, DataTypes) => {

    const TelefonoModel = sequelize.define('telefono', 
    {
        numero: DataTypes.INTEGER,
    },
    {
        freezeTableName: true
    });


    return TelefonoModel;

};