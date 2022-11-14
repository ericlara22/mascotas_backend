const {UserService} = require('../services');

module.exports = {

    createUser: async (req, res) => {
        try {
            const {nombre, apellido_materno, apellido_paterno, rut} = req.body;
            if (nombre && apellido_materno && apellido_paterno && rut){            
                const result = await UserService.createUser(req.body);
                if(result.data){
                    return res.status(200).json(result);
                } else {
                    return res.status(400).json(result);
                }            
            } else {
                return res.status(400).json({message: 'Ingrese los campos obligatorios'});
            }
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },
    
    getAllUsers: async (req, res) => {
        try {
            const result = await UserService.getAllUsers();
            if(result.length === 0){
                return res.status(400).json({message: 'No se encuentran usuarios registrados', data: result});
            } else {
                return res.status(400).json({message: 'Usuarios obtenidos con éxito', data: result});
            }
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    getUserById: async (req, res) => {
        try {
            const {id} = req.params;
            const result = await UserService.getUserById(id);
            if(!result.data){
                return res.status(400).json(result);
            } else {
                return res.status(200).json(result);
            }
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    getUserByRut: async (req, res) => {
        try {
            const {rut} = req.query;
            const result = await UserService.getUserByRut(rut);
            if(!result.data){
                return res.status(400).json(result);
            } else {
                return res.status(200).json(result);
            }
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    editUser: async (req, res) => {
        try {
            const {id} = req.params;
            const userResult = await UserService.getUserById(id);
            if(userResult.data){
                const result = await UserService.updateUser(userResult.data, req.body);
                return res.status(200).json(result);
            } else {
                return res.status(400).json(userResult);
            }
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    deleteUser: async (req, res) => {
    }
}