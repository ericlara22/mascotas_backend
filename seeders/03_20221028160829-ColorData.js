'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('color', [{
      nombre: 'Blanco',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Café claro',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Café oscuro',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Azul',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Amarillo',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Gris',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Celeste',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Morado',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Negro',
      createdAt: date,
      updatedAt: date

    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('color', null, {});
    
  }
};
