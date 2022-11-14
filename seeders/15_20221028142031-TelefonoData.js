'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('telefono', [{
      numero: 1234567,
      personaId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      numero: 1234567,
      personaId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      numero: 1234567,
      personaId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      numero: 1234567,
      personaId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      numero: 1234567,
      personaId: 8,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('telefono', null, {});
    
  }
};
