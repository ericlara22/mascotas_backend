module.exports = (sequelize, DataTypes) => {

    const ImageModel = sequelize.define('image', 
    {
        regular: DataTypes.STRING,
        square: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });


    return ImageModel;

};