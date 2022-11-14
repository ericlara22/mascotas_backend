module.exports = (sequelize, DataTypes) => {

    const AnimalModel = sequelize.define('animal', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return AnimalModel;

};