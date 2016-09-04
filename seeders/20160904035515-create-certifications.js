'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('certifications', [
    {
      specialty: 'Certified Nursery',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      specialty: 'Certified Organic',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      specialty: 'Gluten Free',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      specialty: 'Halal',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      specialty: 'Kosher',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      specialty: 'Vegan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      specialty: 'Vegetarian',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('certifications');
  }
};
