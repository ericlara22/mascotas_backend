module.exports = {
    
    getAllEstados : async () => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getEstadoById: async (id) => {
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

    createEstado: async (params) => {
        try {
           
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    updateEstado: async (params) => {
        try {
            
            
        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar base de datos')
        }
    },

    deleteEstado: async (id) => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    }
}