'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('animal', [{
      nombre: 'Firulais',
      sexoId: 1,
      razaId: 2,
      edadId: 1,
      categoriaMascotaId: 1,
      createdAt: date,
      updatedAt: date
    },
  
    {
      nombre: 'Pepa',
      sexoId: 1,
      razaId: 3,
      edadId: 1,
      categoriaMascotaId: 1,
      createdAt: date,
      updatedAt: date
    },
    
    {
      nombre: 'Sombra',
      sexoId: 1,
      razaId: 1,
      edadId: 2,
      categoriaMascotaId: 1,
      createdAt: date,
      updatedAt: date
    },
    
    {
      nombre: 'Noah',
      sexoId: 1,
      razaId: 2,
      edadId: 1,
      categoriaMascotaId: 2,
      createdAt: date,
      updatedAt: date
    },
    
    {
      nombre: 'Silvestre',
      sexoId: 1,
      razaId: 1,
      edadId: 2,
      categoriaMascotaId: 2,
      createdAt: date,
      updatedAt: date
    },
    
    {
      nombre: 'Mona',
      sexoId: 1,
      razaId: 1,
      edadId: 2,
      categoriaMascotaId: 3,
      createdAt: date,
      updatedAt: date
    },
    
    {
      nombre: 'Fefi',
      sexoId: 1,
      razaId: 4,
      edadId: 1,
      categoriaMascotaId: 4,
      createdAt: date,
      updatedAt: date
    } 

  ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('animal', null, {});
    
  }
};
