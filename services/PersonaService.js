module.exports = {
    
    getAllPersonas : async () => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getPersonaById: async (id) => {
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

    createPersona: async (params) => {
        try {
           
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    updatePersona: async (params) => {
        try {
            
            
        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar base de datos')
        }
    },

    deletePersona: async (id) => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    }
}