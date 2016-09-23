'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
    {
      username: 'bigislandcandies',
      password: 'goodchocolatecandies',
      role: 'Vendor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'oceanfire',
      password: 'fireocean',
      role: 'Vendor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'bergerfarm',
      password: 'farmberger',
      role: 'Vendor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'biabalone',
      password: 'abalone',
      role: 'Vendor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'bromeliadshi',
      password: 'hibro',
      role: 'Vendor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'volcanoisle',
      password: 'papaya',
      role: 'Vendor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'dolefoods',
      password: 'pineapple',
      role: 'Vendor',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users');
  }
};
