'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('categoria_mascota', [{
      nombre: 'Perros',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Gatos',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Hamsters',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Conejos',
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria_mascota', null, {});
    
  }
};
