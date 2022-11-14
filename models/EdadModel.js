module.exports = (sequelize, DataTypes) => {

    const EdadModel = sequelize.define('edad', 
    {
        años: DataTypes.INTEGER
    },
    {
        freezeTableName: true
    });

    return EdadModel;

};