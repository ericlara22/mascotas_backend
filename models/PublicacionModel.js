module.exports = (sequelize, DataTypes) => {

    const PublicacionModel = sequelize.define('publicacion', 
    {
        titulo: DataTypes.STRING,
        descripcion: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });


    return PublicacionModel;

};