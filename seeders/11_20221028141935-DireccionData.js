'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('direccion', [{
      nombre: 'Calle Provincia de Linares',
      numero: 123,
      comunaId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Calle los castaños',
      numero: 654,
      comunaId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Pasaje Los Acacios',
      numero: 23,
      comunaId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Calle Pan de Azucar',
      numero: 77,
      comunaId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Los Olivos',
      numero: 763,
      comunaId: 3,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('direccion', null, {});
    
  }
};
