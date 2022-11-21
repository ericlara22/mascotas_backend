module.exports = (sequelize, DataTypes) => {

    const UserDataModel = sequelize.define('user_data', 
    {
        nombre: DataTypes.STRING,
        apellido_paterno: DataTypes.STRING,
        apellido_materno: DataTypes.STRING,
    },
    {
        freezeTableName: true
    });

    return UserDataModel;

};