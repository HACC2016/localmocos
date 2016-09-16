'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
    {
      name: 'Hawaiian Macadamia Nuts',
      description: 'Truly a classic bite-size snack, these 100% Hawaii-grown whole macadamia nuts are dry-roasted and lightly salted to bring out their rich flavor.',
      product_info_id: 6,
      vendor_info_id: 1,
      price: 12.50,
      qty: 1000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/2/0/2016-09-06_macadamia_nut-1_1.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Milk Chocolate Covered Hawaiian Macadamia Nuts',
      description: 'drops of deliciousness feature premium milk chocolate and 100% pure Hawaiian macadamia nuts.',
      product_info_id: 6,
      vendor_info_id: 1,
      price: 11.75,
      qty: 2000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/1/1/1100macnutmilk_0641.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products');
  }
};
