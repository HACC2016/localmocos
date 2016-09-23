'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('product_infos', [
    {
      product_type_id: 1,
      specific_type: 'Fresh Seafood',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 1,
      specific_type: 'Frozen Seafood',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 1,
      specific_type: 'Processed Seafood',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 2,
      specific_type: 'Candies',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 2,
      specific_type: 'Chips',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 2,
      specific_type: 'Cookies',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 2,
      specific_type: 'Crackers',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 2,
      specific_type: 'Dried Fruits',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 3,
      specific_type: 'Alcoholic',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 3,
      specific_type: 'Concentrates',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 3,
      specific_type: 'Drink Mixes',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 3,
      specific_type: 'Juices',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 3,
      specific_type: 'Tea',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 3,
      specific_type: 'Water',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 4,
      specific_type: 'Big Island',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 4,
      specific_type: 'Kauai',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 4,
      specific_type: 'Kona',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 4,
      specific_type: 'Maui',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 4,
      specific_type: 'Molokai',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 4,
      specific_type: 'Oahu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 5,
      specific_type: 'Dressings',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 5,
      specific_type: 'Jams/Jellies',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 5,
      specific_type: 'Pickled Vegetables',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 5,
      specific_type: 'Preserved Fruits',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 5,
      specific_type: 'Sauces',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 6,
      specific_type: 'Butter',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 6,
      specific_type: 'Cheese',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 6,
      specific_type: 'Ice Cream',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 6,
      specific_type: 'Milk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 7,
      specific_type: 'Anthuriums',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 7,
      specific_type: 'Foliage',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 7,
      specific_type: 'Leis',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      product_type_id: 8,
      specific_type: 'Papaya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ],{})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('product_infos');
  }
};
