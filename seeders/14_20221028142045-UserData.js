'use strict';
const bcryptjs = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();
    let passHash = await bcryptjs.hash("1234", 8)

    await queryInterface.bulkInsert('user', [{
      correo: 'user1@test',
      contrasena: passHash,
      estadoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user2@test',
      contrasena: passHash,
      estadoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user3@test',
      contrasena: passHash,
      estadoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user4@test',
      contrasena: passHash,
      estadoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user5@test',
      contrasena: passHash,
      estadoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user6@test',
      contrasena: passHash,
      estadoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user7@test',
      contrasena: passHash,
      estadoId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user8@test',
      contrasena: passHash,
      estadoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user9@test',
      contrasena: passHash,
      estadoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user10@test',
      contrasena: passHash,
      estadoId: 1,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
    
  }
};
