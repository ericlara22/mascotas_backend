'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('categoria_publicacion', [{
      nombre: 'En Adpoción',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Busco mi Mascota',
      createdAt: date,
      updatedAt: date
    },

    {
      nombre: 'Busco Dueño',
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria_publicacion', null, {});
    
  }
};