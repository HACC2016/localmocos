'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
    {
      name: 'Hawaiian Macadamia Nuts',
      description: 'Truly a classic bite-size snack, these 100% Hawaii-grown whole macadamia nuts are dry-roasted and lightly salted to bring out their rich flavor.',
      productType_id: 2
      vendorInfo_id:
      price:
      qty:
      cert_id:
      image:
      isActive:
      createdAt: new Date(),
      updatedAt: new Date()
    });
    }
    ]
    }, {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
