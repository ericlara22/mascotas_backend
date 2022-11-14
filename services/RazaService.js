module.exports = {
    
    getAllRazas : async () => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getRazaById: async (id) => {
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

    createRaza: async (params) => {
        try {
           
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    updateRaza: async (params) => {
        try {
            
            
        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar base de datos')
        }
    },

    deleteRaza: async (id) => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    }
}