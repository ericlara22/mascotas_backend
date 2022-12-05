'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();

    await queryInterface.bulkInsert('image', [{
      regular: './optimized/medium-1669657010786.jpeg',
      square: './optimized/square-1669657010786.jpeg',
      publicacionId: 1,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669655942951.jpeg',
      square: './optimized/square-1669655942951.jpeg',
      publicacionId: 2,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669655972087.jpeg',
      square: './optimized/square-1669655972087.jpeg',
      publicacionId: 3,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669655982979.jpeg',
      square: './optimized/square-1669655982979.jpeg',
      publicacionId: 4,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669655994212.jpeg',
      square: './optimized/square-1669655994212.jpeg',
      publicacionId: 5,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669656003601.jpeg',
      square: './optimized/square-1669656003601.jpeg',
      publicacionId: 6,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669656011716.jpeg',
      square: './optimized/square-1669656011716.jpeg',
      publicacionId: 7,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669656033453.jpeg',
      square: './optimized/square-1669656033453.jpeg',
      publicacionId: 8,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669656041864.jpeg',
      square: './optimized/square-1669656041864.jpeg',
      publicacionId: 9,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669656051250.jpeg',
      square: './optimized/square-1669656051250.jpeg',
      publicacionId: 10,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669656064499.jpeg',
      square: './optimized/square-1669656064499.jpeg',
      publicacionId: 11,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669656075483.jpeg',
      square: './optimized/square-1669656075483.jpeg',
      publicacionId: 12,
      createdAt: date,
      updatedAt: date
    },

    {
      regular: './optimized/medium-1669656088883.jpeg',
      square: './optimized/square-1669656088883.jpeg',
      publicacionId: 13,
      createdAt: date,
      updatedAt: date
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('image', null, {});
    
  }
};
