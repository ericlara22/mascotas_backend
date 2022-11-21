'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();
    
    await queryInterface.bulkInsert('user_data', [{
      nombre: 'Ana',
      apellido_paterno: 'Rojas',
      apellido_materno: 'Perez',
      userId: 1,
      direccionId: 2,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Bernardo',
      apellido_paterno: 'Silva',
      apellido_materno: 'Hernandez',
      userId: 2,
      direccionId: 4,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Claudio',
      apellido_paterno: 'Garrido',
      apellido_materno: 'Gonzalez',
      userId: 3,
      direccionId: 4,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Daniel',
      apellido_paterno: 'Fernandoi',
      apellido_materno: 'Hernandez',
      userId: 4,
      direccionId: 2,
      telefonoId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Patricio',
      apellido_paterno: 'Carrasco',
      apellido_materno: 'Lopez',
      userId: 5,
      direccionId: 5,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Cristobal',
      apellido_paterno: 'Reyes',
      apellido_materno: 'Rosales',
      userId: 6,
      direccionId: 3,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Javier',
      apellido_paterno: 'Donoso',
      apellido_materno: 'Islas',
      userId: 7,
      direccionId: 5,
      telefonoId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Gloria',
      apellido_paterno: 'Lara',
      apellido_materno: 'Perez',
      userId: 8,
      direccionId: 3,
      telefonoId: 4,
      createdAt: date,
      updatedAt: date
    }

  
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('persona', null, {});
    
  }
};
