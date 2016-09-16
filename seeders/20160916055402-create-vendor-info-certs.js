'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vendor_info_certs', [
    {
      vendor_info_id: 1,
      cert_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vendor_info_certs');
  }
};
