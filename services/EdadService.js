const {models: {EdadModel}} = require('../models');

module.exports = {
    
    getAllEdades : async () => {
        try {
            const edades = await EdadModel.getAllEdades();
            return edades;
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getEdadById: async (id) => {
        try {
            const edad = await EdadModel.findByPk(id);
            return edad;
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    createEdad: async (params) => {
        try {
           
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    updateEdad: async (params) => {
        try {
            
            
        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar base de datos')
        }
    },

    deleteEdad: async (id) => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    }
}