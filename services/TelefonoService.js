module.exports = {
    
    getAllTelefonos : async () => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getTelefonoById: async (id) => {
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

    createTelefono: async (params) => {
        try {
           
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    updateTelefono: async (params) => {
        try {
            
            
        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar base de datos')
        }
    },

    deleteTelefono: async (id) => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    }
}