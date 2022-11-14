'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('animal_color', [{
      colorId: 1,
      animalId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      colorId: 2,
      animalId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      colorId: 3,
      animalId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      colorId: 4,
      animalId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      colorId: 5,
      animalId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      colorId: 6,
      animalId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      colorId: 7,
      animalId: 5,
      createdAt: date,
      updatedAt: date
    },

    {
      colorId: 8,
      animalId: 6,
      createdAt: date,
      updatedAt: date
    },

    {
      colorId: 9,
      animalId: 7,
      createdAt: date,
      updatedAt: date

    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('animal_color', null, {});
    
  }
};
