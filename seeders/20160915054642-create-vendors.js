'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vendor_infos', [
    {
      user_id: 1,
      dba: 'Big Island Candies',
      address1: '585 Hinano St. Hilo, HI. 96720',
      business_ph: '1-800-935-5510',
      sales_ph: '1-800-935-5510',
      website: 'https://www.bigislandcandies.com',
      email: 'contactus@bigislandcandies.com',
      // type_id: 1,
      zip_id: 1,
      market_id: 2,
      service_id: 1,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vendor_infos');
  }
};
