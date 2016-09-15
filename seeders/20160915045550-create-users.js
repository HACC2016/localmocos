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
    }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users');
  }
};
