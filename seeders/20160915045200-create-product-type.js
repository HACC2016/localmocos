'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('product_types', [
    {
      type: 'Farmed Seafoods',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Snack Foods',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Beverages',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Coffee',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Condiments',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Dairy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Floral',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('product_types');
  }
};
