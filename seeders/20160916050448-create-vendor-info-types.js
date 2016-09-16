'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vendor_info_types', [
    {
      vendor_info_id: 1,
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      vendor_info_id: 1,
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vendor_info_types');
  }
};
