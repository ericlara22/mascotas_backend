const {models: {PublicacionModel}} = require('../models');
const UserService = require('./UserService');

module.exports = {
    
    getAllPublicaciones : async (params) => {
        try {

            const publicaciones = await PublicacionModel.findAll();
            return publicaciones;
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getPublicacionById: async (id) => {
        try {
            
            const publicacion = await PublicacionModel.findByPk(id);
            if(!publicacion){
                return {data: null, message: `Publicacion ${id} no existe`}
            } else {
                return {data: publicacion, message: 'Publicación encontrada con éxito'}
            }
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    createPublicacion: async (params) => {
        try {
           
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    updatePublicacion: async (id, params) => {
        try {
            const {titulo, descripcion, categoriaPublicacionId} = params;
            await PublicacionModel.update( )
            
        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar base de datos')
        }
    },

    deletePublicacion: async (id) => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    }
}