const {models: { AnimalModel }} = require('../models');

module.exports = {
    
    createAnimal: async (params) => {
        try {
           
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getAllAnimales : async () => {
        try {
            const animals = {count, rows} = await AnimalModel.findandCountAll();
            return animals;
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getAnimalById: async (id) => {
        try {
            
            const animal = await AnimalModel.findByPk(id);
            if(!user){
                return {data: null, message: `Usuario ${id} no encontrado`}
            } else {
                return {data: user, message: 'Usuario encontrado con éxito'}
            }
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },


    updateAnimal: async (params) => {
        try {
            
            
        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar base de datos')
        }
    },

    deleteAnimal: async (id) => {
        try {
            
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    }
}