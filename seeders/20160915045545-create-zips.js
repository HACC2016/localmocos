'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('zipcodes', [
    {
      city: 'Hilo',
      zip: 96720,
      island: 'Hawaii',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      city: 'Captain Cook',
      zip: 96704,
      island: 'Hawaii',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      city: 'Mountain View',
      zip: 96771,
      island: 'Hawaii',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      city: 'Kailua-Kona',
      zip: 96740,
      island: 'Hawaii',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('zipcodes');
  }
};
