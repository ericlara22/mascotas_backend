const {UserService} = require('../services');
const paginationHelper = require('../helpers/pagination');
const bcryptjs = require('bcryptjs')

module.exports = {

    create: async (req, res) => {
        try {
            let params = {};
            const {correo, password: contrasena} = req.body;
            if(correo, contrasena){
                const passHash = await bcryptjs.hash(contrasena, 8)
                params = {
                    correo,
                    contrasena: passHash,
                    estadoId: 2
                }
                const result = await UserService.create(params)
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
            let query = {}
            const {id} = req.params;
            const {nombre='', sexoId='', razaId='', edadId='', categoriaMascotaId=''} = req.body;
            nombre ? query.nombre = nombre : '';
            sexoId ? query.sexoId = sexoId : '';
            razaId ? query.razaId = razaId : '';
            edadId ? query.edadId = edadId : '';
            categoriaMascotaId ? query.categoriaMascotaId = categoriaMascotaId : '';
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

