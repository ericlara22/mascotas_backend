const {PublicacionService, AnimalService, CategoriaMascotaService, CategoriaPublicacionService, EdadService, SexoService, ColorService, ComunaService, RazaService, EstadoService} = require('../services');
const paginationHelper = require('../helpers/pagination');

module.exports = {

    create: async (req, res) => {
        try {
            const {titulo, descripcion, estadoId=2, comuna, categPubli, animal, categAnimal, edad, raza, sexo, color } = req.body;
            const {userAuth} = req;
            if(titulo, descripcion, comuna, categPubli, animal, categAnimal){
                let query = {};
                edad ? query.edadId = await (await EdadService.findOne({años: edad})).data.id: '';
                raza ? query.razaId = await (await RazaService.findOne({nombre: raza})).data.id: '';
                sexo ? query.sexoId = await (await SexoService.findOne({nombre: sexo})).data.id: '';
                const categoriaMascotaId = await (await CategoriaMascotaService.findOne({nombre: categAnimal})).data.id;
                const animalId = await (await AnimalService.create({
                    nombre:animal, 
                    categoriaMascotaId,
                    ...query
                })).data.id;
                const comunaId = await (await ComunaService.findOne({nombre: comuna})).data.id;
                const categoriaPublicacionId = await (await CategoriaPublicacionService.findOne({nombre: categPubli})).data.id;
                const result = await PublicacionService.create({
                    titulo,
                    descripcion,
                    estadoId,
                    animalId,
                    comunaId,
                    categoriaPublicacionId,
                    userId: userAuth.id
                })               
                !result.data
                ? res.status(400).json(result)
                : res.status(200).json(result);
            } else {
                return res.status(400).json({message: 'Faltan campos obligatorios por completar', data: null});
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({message: error.message});
        }
    },

    findAll: async (req, res) => {
        try {
            const {page, size, ...params} = req.query;
            const pagination = paginationHelper(page, size);
            const result = await PublicacionService.findAll(params, pagination);
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
            const result = await PublicacionService.getOneById(id);
            !result.data
            ? res.status(400).json(result)
            : res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },

    update: async (req, res) => {
        try {
            let query = {}
            let queryAnimal = {};
            const {userAuth} = req;
            const {id} = req.params;
            const {titulo, descripcion, estado, comuna, categPubli, nombreAnimal, categAnimal, edad, raza, sexo, color } = req.body;
            let publicacion = await (await PublicacionService.getOneById(id)).data;
            if (userAuth.id === publicacion.userId || userAuth.estadoId === 5) {
                let estadoId, comunaId;
                titulo ? query.titulo = titulo : '';
                descripcion ? query.descripcion = descripcion : '';
                estado ? estadoId = await (await EstadoService.findOne({nombre: estado})).data.id : '';
                comuna ? comunaId = await (await ComunaService.findOne( {nombre: comuna})).data.id : '';             
                if(nombreAnimal || categAnimal || edad || raza || sexo || color){
                    let categoriaPublicacionId, categoriaMascotaId, edadId, razaId, sexoId;
                    categPubli ? queryAnimal.categoriaPublicacionId = await (await CategoriaPublicacionService.findOne( {nombre: categPubli})).data.id : '';
                    categAnimal ? queryAnimal.categoriaMascotaId = await (await CategoriaMascotaService.findOne( {nombre: categAnimal})).data.id : '';
                    edad ? queryAnimal.edadId = await (await EdadService.findOne({nombre: edad})).data.id : '';
                    raza ? queryAnimal.razaId = await (await RazaService.findOne({nombre: raza})).data.id : '';
                    sexo ? queryAnimal.sexoId = await (await SexoService.findOne({nombre: sexo})).data.id : '';
                    nombreAnimal ? queryAnimal.nombre = nombreAnimal : '';
                    query.animalId = await (await AnimalService.update( publicacion.animalId, queryAnimal )).data.id;   
                }
                const result = await PublicacionService.update(id, query);
                !result.data
                ? res.status(400).json(result)
                : res.status(200).json(result);
            } else {
                return res.status(401).json({message: 'Usuario actual no tiene permisos para editar esta publicación', data: null});
            }
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: error.message});
        }
    },

    disable: async (req, res) => {
        try {
            const {id} = req.params;
            let publicacion = await (await PublicacionService.getOneById(id)).data;
            if (userAuth.id === publicacion.userId || userAuth.estadoId === 5){
                result = await PublicacionService.update(id, {estadoId: 3});
                !result.data
                ? res.status(400).json(result)
                : res.status(200).json(result);
            } else {
                return res.status(401).json({message: 'Usuario actual no tiene permisos para editar esta publicación', data: null});
            } 
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}