'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('pais', [{
      nombre: 'Chile',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Argentina',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'México',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'España',
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pais', null, {});
    
  }
};
