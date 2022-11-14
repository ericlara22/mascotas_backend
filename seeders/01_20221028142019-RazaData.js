'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('raza', [{
      nombre: 'Desconocido',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Pitbull',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Siamés',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Pastor Alemán',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Poodle',
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('raza', null, {});
    
  }
};
