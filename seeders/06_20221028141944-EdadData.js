'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('edad', [{
      años: 6,
      createdAt: date,
      updatedAt: date
    },

    {
      años: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      años: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      años: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      años: 10,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('edad', null, {});
    
  }
};
