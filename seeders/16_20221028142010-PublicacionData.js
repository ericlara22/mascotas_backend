'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('publicacion', [{
      titulo: 'Perrito perdido',
      descripcion: 'Se me extravió mi perrito, ayudenme a encontrarlo',
      userId: 5,
      categoriaPublicacionId: 2,
      estadoId: 2,
      animalId: 1,
      comunaId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Encontré gato perdido',
      descripcion: 'Encontré este gato que busca a su dueño. Tiene collar.',
      userId: 6,
      categoriaPublicacionId: 3,
      estadoId: 2,
      animalId: 2,
      comunaId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Busco a mi conejo',
      descripcion: 'Se me perdió mi conejito en Talca, ayuda.',
      userId: 7,
      categoriaPublicacionId: 2,
      estadoId: 2,
      animalId: 7,
      comunaId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Perritos en adopción',
      descripcion: 'estos perritos recién nacidos buscan un nuevo hogar.',
      userId: 8,
      categoriaPublicacionId: 1,
      estadoId: 2,
      animalId: 3,
      comunaId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Se me perdió mi perro',
      descripcion: 'Busco a mi perrito dalmata perdido en el sector de las Rastras',
      userId: 1,
      categoriaPublicacionId: 2,
      estadoId: 2,
      animalId: 2,
      comunaId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Busco a mi gato extraviado',
      descripcion: 'ayuda a encontrar a mi gato en el sector de Providencia',
      userId: 3,
      categoriaPublicacionId: 2,
      estadoId: 2,
      animalId: 5,
      comunaId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'No encuentro a mi conejo',
      descripcion: 'Mi conejo se me perdío en Aguas Negras',
      userId: 2,
      categoriaPublicacionId: 2,
      estadoId: 2,
      animalId: 7,
      comunaId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Encontré este perrito',
      descripcion: 'Perrito Dalata busca a su dueño o dueña',
      userId: 8,
      categoriaPublicacionId: 3,
      estadoId: 2,
      animalId: 3,
      comunaId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Encontré gato perdido',
      descripcion: 'Este gatito lo encontré herido en la calle',
      userId: 8,
      categoriaPublicacionId: 3,
      estadoId: 2,
      animalId: 4,
      comunaId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Encontré perro en la calle',
      descripcion: 'Perrito cariñoso y juguetón busca a su dueña. Tiene collar pero está roto',
      userId: 8,
      categoriaPublicacionId: 3,
      estadoId: 2,
      animalId: 1,
      comunaId: 5,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Conejos en adopción',
      descripcion: 'estos conejos recién nacidos buscan un nuevo hogar.',
      userId: 5,
      categoriaPublicacionId: 1,
      estadoId: 2,
      animalId: 7,
      comunaId: 5,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Gatos buscan hogar',
      descripcion: 'Mi gata tuvo bebés y están buscando una nueva familia',
      userId: 6,
      categoriaPublicacionId: 1,
      estadoId: 2,
      animalId: 4,
      comunaId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Regalo perritos',
      descripcion: 'Tengo 3 perritos que recogí del albergue. Buscan familia',
      userId: 6,
      categoriaPublicacionId: 1,
      estadoId: 2,
      animalId: 3,
      comunaId: 5,
      createdAt: date,
      updatedAt: date
    }
  
  
  
  
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('publicacion', null, {});
    
  }
};
