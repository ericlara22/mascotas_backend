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
      direccionId: 4,
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
      direccionId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Busco a mi conejo',
      descripcion: 'Se me perdió mi conejito en Talca, ayuda.',
      userId: 7,
      categoriaPublicacionId: 2,
      estadoId: 2,
      animalId: 3,
      direccionId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      titulo: 'Perritos en adopción',
      descripcion: 'estos perritos recién nacidos buscan un nuevo hogar.',
      userId: 8,
      categoriaPublicacionId: 1,
      estadoId: 2,
      animalId: 4,
      direccionId: 2,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('publicacion', null, {});
    
  }
};
