'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('sexo', [{
      nombre: 'Indefinido',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Masculino',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Femenino',
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sexo', null, {});
    
  }
};
