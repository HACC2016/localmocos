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
    }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('zipcodes');
  }
};
