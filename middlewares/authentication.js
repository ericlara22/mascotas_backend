const jwt = require('jsonwebtoken');
const { development } = require('../config/config.json')
const verifyToken = (req, res, next) => {
    const token = req.get('Authorization') ? req.get('Authorization').split('Bearer')[1].trim(): null
    jwt.verify(token, development.secret, (err, decoded) => {
        if(err) {
            return res.status(401).json({message: 'Token no válido'});
        }
        req.userAuth = decoded.user;
        return next();
    });
};

module.exports = verifyToken;