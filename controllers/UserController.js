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

                let paramsComuna = {
                    nombre: comuna
                }

                const comunaId = await (await ComunaService.findOne(paramsComuna)).data.id;

                let paramsDireccion = {
                    nombre: direccionNombre,
                    numero: direccionNumero,
                    comunaId
                }
                
                const direccionId = await (await DireccionService.create(paramsDireccion)).data.id;
                
                let paramsTelefono = {
                    numero: numTelefono
                }
                
                const telefonoId = await (await TelefonoService.create(paramsTelefono)).data.id;
                
                
                
                let paramsUser = {
                    correo,
                    contrasena: passHash,
                    estadoId: 2,
                    personaId: persona.data.id
                }

                const result = await UserService.create(params)

                let paramsUserData = {
                    nombre, 
                    apellido_paterno, 
                    apellido_materno,
                    direccionId,
                    telefonoId,
                    userId
                }
                
                const userData = await UserDataService.create(paramsUserData);


                return res.status(200).json(result);
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
            console.log(req.params)
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
            let queryPersona = {}
            let queryUser = {}
            const {id} = req.params;
            const {nombre='', apellido_paterno='', apellido_materno='', direccion='', correo='', password='',estadoId=''} = req.body;
            nombre ? queryPersona.nombre = nombre : '';
            apellido_paterno ? queryPersona.apellido_paterno = apellido_paterno : '';
            apellido_materno ? Persona.apellido_materno = apellido_materno : '';
            direccion ? queryPersona.direccion = direccion : '';
            correo ? queryUser.correo = correo : '';
            password ? queryUser.password = password : '';
            estadoId ? queryUser.estadoId = estadoId : '';

            const result = await UserService.update(id, query)
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

