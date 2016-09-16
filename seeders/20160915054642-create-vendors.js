'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vendor_infos', [
    {
      user_id: 1,
      company_name: 'Big Island Candies',
      business_reg_num: 12341234,
      dba: 'Big Island Candies',
      address1: '585 Hinano St. Hilo, HI. 96720',
      business_ph: '1-800-935-5510',
      sales_ph: '1-800-935-5510',
      website: 'https://www.bigislandcandies.com',
      email: 'contactus@bigislandcandies.com',
      zip_id: 1,
      market_id: 2,
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
