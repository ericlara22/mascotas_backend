module.exports = (sequelize, DataTypes) => {

    const UserModel = sequelize.define('user', 
    {
        
        correo: {
            type: DataTypes.STRING,
            unique: true 
        },
        contrasena: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return UserModel;

};