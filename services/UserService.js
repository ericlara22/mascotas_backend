const {models: {UserModel, PersonaModel}} = require('../models');


module.exports = {

    getAllUsers: async (params, pagination)=> {
        try {
            const {page, size} = pagination;
            
            const users = await PersonaModel.findAndCountAll({
                limit: size, 
                offset: page * size
            });
            return users;
        } catch (error) {
            console.log(error);
            throw Error('Error al consultar usuarios')
        }
    },

    getUserById: async (id) => {
        try {
            const user = await PersonaModel.findByPk(id);
            return user;
            // if(!user){
            //     return {data: null, message: `Usuario ${id} no encontrado`}
            // } else {
            //     return {data: user, message: 'Usuario encontrado con éxito'}
            // }
        } catch (error) {
            throw Error('Error al consultar usuarios')
        }
    },

    getUserByRut: async (rut) => {
        try {
            const user = await PersonaModel.findOne({where: {rut}});
            return user;
            // if(!user){
            //     return {data: null, message: `Usuario con el rut ${rut} no encontrado`}
            // } else {
            //     return {data: user, message: 'Usuario encontrado con éxito'}
            // }
        } catch (error) {
            throw Error('Error al consultar usuarios')
        }
    },

    createUser: async (params) => {
        try {
            const {nombre, apellido_materno, apellido_paterno, rut} = params;
            const {user, created} = await PersonaModel.findOrCreate({where: {rut}, defaults: {nombre, apellido_materno, apellido_paterno, rut}})
            if (created){
                return user;
            } else {
                return null;
            }   
        } catch (error) {
            throw Error('Error al consultar usuarios')
        }
    },

    updateUser: async (userData, params) => {
        try {
            let user = userData.toJSON();

            const {nombre=user.nombre, apellido_materno=user.apellido_materno, apellido_paterno=user.apellido_paterno, rut=user.rut} = params; 
            await PersonaModel.update({nombre, apellido_paterno, apellido_materno, rut}, 
                {where:{id: user.id},
            });
            user = await PersonaModel.findByPk(user.id);
            if(!user){
                return {data:null, message: 'Error al editar usuario'}
            } else {
                return {data: user, message: `Usuario ${user.id} editado con éxito`}
            }          
        } catch (error) {
            console.log(error.message)
            throw Error('Error al consultar usuarios')
        }
    },
}