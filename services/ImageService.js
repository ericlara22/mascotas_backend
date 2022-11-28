const {models: {ImageModel: Model}} = require('../models/')
const target = 'imagen';

module.exports = {

    create: async (params) => {

        try {
            let result = {}
            result.data = await Model.create(params);
            result.message = `Nuevo registro de ${target} creado`    
            return result;
        } catch (error) {
            console.log(error)
            throw Error('Error al consultar base de datos')
        }
    },

    delete: async (params) => {
        try {
            let result = {};
            result.data = await Model.destroy({where:params});
            result.message = `Registro de ${target} eliminado`    
            return result;
        } catch (error) {
            console.log(error)
            throw Error('Error al consultar base de datos')
        }
    }



}