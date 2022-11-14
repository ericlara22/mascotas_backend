module.exports = (sequelize, DataTypes) => {

    const CategoriaPublicacionModel = sequelize.define('categoria_publicacion', 
    {
        nombre: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return CategoriaPublicacionModel;

};