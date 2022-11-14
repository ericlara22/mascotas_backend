const {PublicacionService} = require('../services');

module.exports = {

    create: async (req, res) => {
        try {
            const {} = req.body;

            return res.status(200).json({message: 'Success', data: null});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    findAll: async (req, res) => {
        try {
            const params = {keywPubl='', keywUser='', created=''} = req.query;
            const result = await PublicacionService.getAllPublicaciones(params);
            if(result.length === 0){
                return res.status(500).json({message: 'No data', data: result});
            } else {
                return res.status(200).json({message: 'Success', data: result});
            }
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    findOne: async (req, res) => {
        try {
            const {id} = req.params;
            const result = await PublicacionService.getPublicacionById(id);
            result.length === 0 
            ? res.status(500).json({message: 'No data', data: result}) 
            : res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    update: async (req, res) => {
        try {
            const {id} = req.params;
            const result = await PublicacionService.updatePublicacion(id, req.query)

            return res.status(200).json({message: 'Success', data: null});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    delete: async (req, res) => {
        try {
            const {id} = req.params;

            return res.status(200).json({message: 'Success', data: null});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }


}