const {models: {UserModel: Model}} = require('../models');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const target = 'usuario';
const { development } = require('../config/config.json');


module.exports = {

    login: async (params) => {
        try {
            let result = {};
            const {correo, clave} = params;
            let data = await Model.findOne({where: {correo}})
            if(!data){
                result.message = `Correo de ${target} no registrado`;
            } else {
                const passhash = await bcryptjs.compare(clave, data.contrasena)
                if(!passhash) {
                    result.message = `Contraseña de ${target} incorrecta`;
                    data = null;
                }else{
                    const token = jwt.sign(
                        {
                        data,
                        },
                        development.secret,
                        { expiresIn: development.expires },
                    );                  
                    result = {
                        data: {
                            user:data,
                            token
                        }, 
                        message: `Login de ${target} correcto`
                    };
                }
            }
            return result;            
        } catch (error) {
            console.log(error)
            throw Error('Error al consultar base de datos')
        }
    },
    
    create: async (params) => {
        try {
            let result = {};
            const [data, created] = await Model.findOrCreate({where: {correo:params.correo}, defaults: params, raw: true})
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