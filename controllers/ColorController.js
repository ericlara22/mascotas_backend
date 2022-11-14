const {ColorService} = require('../services');

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
            return res.status(200).json({message: 'Success', data: null});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    findOne: async (req, res) => {
        try {
            const {id} = req.params;

            return res.status(200).json({message: 'Success', data: null});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    update: async (req, res) => {
        try {
            const {id} = req.params;
            const {} = req.query;

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