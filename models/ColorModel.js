module.exports = (sequelize, DataTypes) => {

    const ColorModel = sequelize.define('color', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return ColorModel;

};