'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('services', [
    {
      service: 'Food Service',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      service: 'Private Label',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      service: 'E-Commerce',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      service: 'Retail',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      service: 'Other',
      description: 'Other service',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('services');
  }
};
