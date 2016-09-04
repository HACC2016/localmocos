'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('markets', [
    {
      market: 'US Mainland',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      market: 'Hawaii',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      market: 'Japan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      market: 'Canada',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      market: 'Australia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      market: 'Asia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      market: 'Europe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      market: 'Guam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      market: 'Other',
      description: 'Other market',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('markets');
  }
};
