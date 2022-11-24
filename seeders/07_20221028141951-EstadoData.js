'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('estado', [{
      nombre: 'Inactivo',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Activo',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Bloqueado',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Desactivado',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Admin',
      createdAt: date,
      updatedAt: date
    }
  
  
  
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estado', null, {});
    
  }
};
