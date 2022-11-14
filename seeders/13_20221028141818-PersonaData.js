'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();
    
    await queryInterface.bulkInsert('persona', [{
      nombre: 'Ana',
      apellido_paterno: 'Rojas',
      apellido_materno: 'Perez',
      rut: 1234-5,
      direccionId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Bernardo',
      apellido_paterno: 'Silva',
      apellido_materno: 'Hernandez',
      rut: 3456-5,
      direccionId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Claudio',
      apellido_paterno: 'Garrido',
      apellido_materno: 'Gonzalez',
      rut: 9876-5,
      direccionId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Daniel',
      apellido_paterno: 'Fernandoi',
      apellido_materno: 'Hernandez',
      rut: 3541-6,
      direccionId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Patricio',
      apellido_paterno: 'Carrasco',
      apellido_materno: 'Lopez',
      rut: 1232-1,
      direccionId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Cristobal',
      apellido_paterno: 'Reyes',
      apellido_materno: 'Rosales',
      rut: 2347-6,
      direccionId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Javier',
      apellido_paterno: 'Donoso',
      apellido_materno: 'Islas',
      rut: 1351-7,
      direccionId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Gloria',
      apellido_paterno: 'Lara',
      apellido_materno: 'Perez',
      rut: 1234-5,
      direccionId: 2,
      createdAt: date,
      updatedAt: date
    }

  
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('persona', null, {});
    
  }
};
