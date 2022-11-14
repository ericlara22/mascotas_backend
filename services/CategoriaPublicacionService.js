module.exports = {
    
    getAllCategoriaPublicaciones : async () => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getCategoriaPublicacionesById: async (id) => {
        try {
            /*
            const animal = await AnimalModel.findByPk(id);
            if(!user){
                return {data: null, message: `Usuario ${id} no encontrado`}
            } else {
                return {data: user, message: 'Usuario encontrado con éxito'}
            }
            */
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    createCategoriaPublicaciones: async (params) => {
        try {
           
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    updateCategoriaPublicaciones: async (params) => {
        try {
            
            
        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar base de datos')
        }
    },

    deleteCategoriaPublicaciones: async (id) => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    }
}