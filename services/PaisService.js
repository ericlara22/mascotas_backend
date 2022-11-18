const {models: { PaisModel: Model }} = require('../models');
const target = 'pais';

module.exports = {
    
    create: async (params) => {
        try {
            let result = {};
            const [data, created] = await Model.upsert(params)
            if(created){
                result.message = `Nuevo registro de ${target} creado`
                result.data = data
            } else {
                result.message = `Registro de ${target} ya existe`
                result.data = null;
            }
            return result
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    findAll: async (params, pagination) => {
        try {
            let result = {};
            const {page, size: limit} = pagination
            result.data = await Model.findAndCountAll( {
                limit,
                offset: page * limit,
                where: params
            });
            if(result.data.count === 0){
                result.message = `No hay registros de ${target} que mostrar`
            } else {
                result.message = `Registro de ${target} encontrado`
            }
            return result;
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    getOneById: async (id) => {
        try {
            let result = {};
            result.data = await Model.findByPk(id);
            if(!result.data){
                result.message = `No hay registros de ${target} que mostrar con id ${id}`
            } else {
                result.message = `Registro de ${target} encontrado`
            }
            return result;
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    },

    update: async (id, query) => {
        try {
            let result = {}
            await Model.findByPk(id, {raw: true}).then( async elemento => {
                if (!elemento){
                    result.message = `No hay registros de ${target} que mostrar con id ${id}`
                    return result.data = null
                } else {
                    await Model.update(query, {where: {id}}).then( async () => {
                        result.message = `Registro de ${target} editado`
                        result.data = await Model.findByPk(id, {raw: true});
                    })
                }       
            })
            return result;

        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar base de datos')
        }
    },

    delete: async (id) => {
        try {
            let result = {}
            result.data = await Model.findByPk(id, {raw: true})
            if(!result.data){
                result.message = `No hay registros de ${target} que mostrar con id ${id}`
                result.data = null
            } else {
                await Model.destroy({where: {id}})
                result.message = `Registro de ${target} eliminado con éxito`
            }
            return result
        } catch (error) {
            throw Error('Error al consultar base de datos')
        }
    }
}