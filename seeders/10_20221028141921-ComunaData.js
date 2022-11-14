'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('comuna', [{
      nombre: 'Talca',
      ciudadId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Maule',
      ciudadId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Longaví',
      ciudadId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Providencia',
      ciudadId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Malloa',
      ciudadId: 5,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comuna', null, {});
    
  }
};
