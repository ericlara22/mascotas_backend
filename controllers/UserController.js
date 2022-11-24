const {UserService, DireccionService, TelefonoService, UserDataService, ComunaService} = require('../services');
const paginationHelper = require('../helpers/pagination');
const bcryptjs = require('bcryptjs');

module.exports = {

    login: async (req, res) => {

        try {
            const {correo, clave} = req.body;
            if(correo && clave){
                const result = await UserService.login(req.body);
                !result.data
                ? res.status(400).json(result)
                : res.status(200).json(result);
            } else {
                return res.status(400).json({message: 'Faltan campos por completar', data: null});
            }
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    create: async (req, res) => {
        try {
            let params = {};
            const {nombre, apellido_paterno, apellido_materno, direccionNombre, direccionNumero, comuna, numTelefono, correo, password: contrasena} = req.body;
            if(nombre && apellido_paterno && apellido_materno && direccionNombre && direccionNumero && comuna && numTelefono && correo && contrasena){
                const passHash = await bcryptjs.hash(contrasena, 8)
                registeredCorreo = await UserService.findOne({correo})
                if(registeredCorreo.data){
                    return res.status(400).json({message: 'correo ya existe', data: null});
                } else {
                    const comunaId = await (await ComunaService.findOne({nombre: comuna})).data.id;   
                    const direccionId = await (await DireccionService.create({
                        nombre: direccionNombre,
                        numero: direccionNumero,
                        comunaId
                    })).data.id;        
                    const telefonoId = await (await TelefonoService.create({numero: numTelefono})).data.id;           
                    const userDataId = await (await UserDataService.create({
                        nombre, 
                        apellido_paterno, 
                        apellido_materno,
                        direccionId,
                        telefonoId,
                    })).data.id;
                    const result = await UserService.create({
                        correo,
                        contrasena: passHash,
                        estadoId: 2,
                        userDataId
                    });
                    return res.status(200).json(result);
                }            
            } else {
                return res.status(400).json({message: 'Faltan campos por completar', data: null});
            }
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    findAll: async (req, res) => {
        try {
            const {page, size, ...params} = req.query;
            const pagination = paginationHelper(page, size)
            const result = await UserService.findAll(params, pagination);
            !result.data
            ? res.status(400).json(result)
            : res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    findOne: async (req, res) => {
        try {
            const {id} = req.params;
            const result = await UserService.getOneById(id)
            !result.data
            ? res.status(400).json(result)
            : res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(result);
        }
    },

    update: async (req, res) => {
        try {
            let queryUserData = {}
            let queryUser = {}
            const {id} = req.params;
            const {nombre, apellido_paterno, apellido_materno, direccion, comuna, telefono, correo, password, estadoId} = req.body;
            
            let user = await UserService.getOneById(id); 
            const userData = await (await UserDataService.getOneById(user.data.userDataId)).data;

            if(nombre || apellido_paterno || apellido_materno){
                nombre ? queryUserData.nombre = nombre : '';
                apellido_paterno ? queryUserData.apellido_paterno = apellido_paterno : '';
                apellido_materno ? queryUserData.apellido_materno = apellido_materno : '';
                await UserDataService.update(userData.id, queryUserData)
            }

            direccion ? await DireccionService.update(userData.direccionId, {nombre: direccion}) : '';
            telefono ? await TelefonoService.update(userData.telefonoId, {numero: telefono}) : '';
 
            if(password){
                const passHash = await bcryptjs.hash(password, 8)
                queryUser.password = password;
            }
            
            correo ? queryUser.correo = correo : '';
            estadoId ? queryUser.estadoId = estadoId : '';

            const result = await UserService.update(id, queryUser)
            !result.data
            ? res.status(400).json(result)
            : res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    delete: async (req, res) => {
        try {
            const {id} = req.params;
            const result = await UserService.delete(id)
            !result.data
            ? res.status(400).json(result)
            : res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }


}

