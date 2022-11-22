'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();
    
    await queryInterface.bulkInsert('user_data', [{
      nombre: 'Ana',
      apellido_paterno: 'Rojas',
      apellido_materno: 'Perez',
      direccionId: 2,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Bernardo',
      apellido_paterno: 'Silva',
      apellido_materno: 'Hernandez',
      direccionId: 4,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Claudio',
      apellido_paterno: 'Garrido',
      apellido_materno: 'Gonzalez',
      direccionId: 4,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Daniel',
      apellido_paterno: 'Fernandoi',
      apellido_materno: 'Hernandez',
      direccionId: 2,
      telefonoId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Patricio',
      apellido_paterno: 'Carrasco',
      apellido_materno: 'Lopez',
      direccionId: 5,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Cristobal',
      apellido_paterno: 'Reyes',
      apellido_materno: 'Rosales',
      direccionId: 3,
      telefonoId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Javier',
      apellido_paterno: 'Donoso',
      apellido_materno: 'Islas',
      direccionId: 5,
      telefonoId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Gloria',
      apellido_paterno: 'Lara',
      apellido_materno: 'Perez',
      direccionId: 3,
      telefonoId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Andrés',
      apellido_paterno: 'Lopez',
      apellido_materno: 'Perez',
      direccionId: 1,
      telefonoId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Vicente',
      apellido_paterno: 'Yañez',
      apellido_materno: 'González',
      direccionId: 2,
      telefonoId: 5,
      createdAt: date,
      updatedAt: date
    }

  
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('persona', null, {});
    
  }
};
