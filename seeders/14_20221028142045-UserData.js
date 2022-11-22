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
      userDataId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user2@test',
      contrasena: passHash,
      estadoId: 2,
      userDataId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user3@test',
      contrasena: passHash,
      estadoId: 2,
      userDataId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user4@test',
      contrasena: passHash,
      estadoId: 2,
      userDataId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user5@test',
      contrasena: passHash,
      estadoId: 2,
      userDataId: 5,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user6@test',
      contrasena: passHash,
      estadoId: 2,
      userDataId: 6,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user7@test',
      contrasena: passHash,
      estadoId: 3,
      userDataId: 7,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user8@test',
      contrasena: passHash,
      estadoId: 2,
      userDataId: 8,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user9@test',
      contrasena: passHash,
      estadoId: 2,
      userDataId: 9,
      createdAt: date,
      updatedAt: date
    },

    {
      correo: 'user10@test',
      contrasena: passHash,
      estadoId: 1,
      userDataId: 10,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
    
  }
};
