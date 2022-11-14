'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('user', [{
      correo: 'user1@test',
      contrasena: '1234',
      estadoId: 2,
      personaId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user2@test',
      contrasena: '1234',
      estadoId: 2,
      personaId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user3@test',
      contrasena: '1234',
      estadoId: 2,
      personaId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user4@test',
      contrasena: '1234',
      estadoId: 2,
      personaId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user5@test',
      contrasena: '1234',
      estadoId: 2,
      personaId: 5,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user6@test',
      contrasena: '1234',
      estadoId: 2,
      personaId: 6,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user7@test',
      contrasena: '1234',
      estadoId: 3,
      personaId: 7,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user8@test',
      contrasena: '1234',
      estadoId: 2,
      personaId: 8,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user9@test',
      contrasena: '1234',
      estadoId: 2,
      personaId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user10@test',
      contrasena: '1234',
      estadoId: 1,
      personaId: 2,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
    
  }
};
