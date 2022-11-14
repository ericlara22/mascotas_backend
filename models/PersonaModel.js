module.exports = (sequelize, DataTypes) => {

    const PersonaModel = sequelize.define('persona', 
    {
        nombre: DataTypes.STRING,
        apellido_paterno: DataTypes.STRING,
        apellido_materno: DataTypes.STRING,
        rut: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return PersonaModel;

};