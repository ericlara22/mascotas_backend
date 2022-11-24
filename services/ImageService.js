const {models: {ImageModel: Model}} = require('../models/')


module.exports = {

    create: async (params) => {

        try {

            const result = await Model.create( params)

            
        } catch (error) {
            console.log(error)
            throw Error('Error al consultar base de datos')
        }
    }



}