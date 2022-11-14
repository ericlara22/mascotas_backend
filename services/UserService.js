const {models: {UserModel, PersonaModel}} = require('../models');


module.exports = {

    getAllUsers: async (params)=> {
        try {
            const {count, rows} = await PersonaModel.findAndCountAll();
            return rows;
        } catch (error) {
            throw Error('Error al consultar usuarios')
        }
    },

    getUserById: async (id) => {
        try {
            const user = await PersonaModel.findByPk(id);
            if(!user){
                return {data: null, message: `Usuario ${id} no encontrado`}
            } else {
                return {data: user, message: 'Usuario encontrado con éxito'}
            }
        } catch (error) {
            throw Error('Error al consultar usuarios')
        }
    },

    getUserByRut: async (rut) => {
        try {
            const user = await PersonaModel.findOne({where: {rut}});
            if(!user){
                return {data: null, message: `Usuario con el rut ${rut} no encontrado`}
            } else {
                return {data: user, message: 'Usuario encontrado con éxito'}
            }
        } catch (error) {
            throw Error('Error al consultar usuarios')
        }
    },

    createUser: async (params) => {
        try {
            const {nombre, apellido_materno, apellido_paterno, rut} = params;
            const user = await PersonaModel.findOne({where: {rut}})
            if(user) {
                return {data:null, message: 'Rut de usuario ya registrado'};
            } else {
                const response = await PersonaModel.create({nombre, apellido_materno, apellido_paterno, rut})
                return {data: response, message: 'Usuario creado con éxito'};
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