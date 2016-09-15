'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
    {
      name: 'Hawaiian Macadamia Nuts',
      description: 'Truly a classic bite-size snack, these 100% Hawaii-grown whole macadamia nuts are dry-roasted and lightly salted to bring out their rich flavor.',
      productType_id: 2,
      vendorInfo_id: 1,
      price: 12.50,
      qty: 1000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/2/0/2016-09-06_macadamia_nut-1_1.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products');
  }
};
