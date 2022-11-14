'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('ciudad', [{
      nombre: 'Talca',
      paisId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Curicó',
      paisId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Linares',
      paisId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Santiago',
      paisId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Rancagua',
      paisId: 1,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ciudad', null, {});
    
  }
};
