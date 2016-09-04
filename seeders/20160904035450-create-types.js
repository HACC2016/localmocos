'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('types', [
    {
      job: 'Distributor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      job: 'Grower',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      job: 'Manufacturer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      job: 'Processor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      job: 'Retailer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      job: 'Wholesaler',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      job: 'Other',
      description: 'Other job',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('types');
  }
};
