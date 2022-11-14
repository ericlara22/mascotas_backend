module.exports = (sequelize, DataTypes) => {

    const UserModel = sequelize.define('user', 
    {
        correo: DataTypes.STRING,
        contrasena: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return UserModel;

};