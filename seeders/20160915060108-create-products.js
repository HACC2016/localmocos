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
      description: 'Drops of deliciousness feature premium milk chocolate and 100% pure Hawaiian macadamia nuts.',
      product_info_id: 6,
      vendor_info_id: 1,
      price: 11.75,
      qty: 2000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/1/1/1100macnutmilk_0641.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Katsuo Tsuyu Canned Kona Abalone Gift Box (3 cans)',
      description: 'Fully cooked canned Kona Abalone flavored with Katsuo Tsuyu in an attractive gift box.',
      product_info_id: 3,
      vendor_info_id: 4,
      price: 45.00,
      qty: 2000,
      image: 'https://bigislandabalone.com/media/catalog/product/cache/1/image/5e06319eda06f020e43594a9c230972d/f/i/file_3_1.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Live Ezo Abalone',
      description: 'Premium Live Ezo Abalone',
      product_info_id: 1,
      vendor_info_id: 4,
      price: 10.00,
      qty: 2000,
      image: 'https://bigislandabalone.com/media/catalog/product/cache/1/image/5e06319eda06f020e43594a9c230972d/l/i/live.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Premium 100% Kona Coffee',
      description: 'Our 100% Kona coffee is smooth bodied with a heavenly aroma.',
      product_info_id: 17,
      vendor_info_id: 1,
      price: 20.00,
      qty: 5000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/4/0/4012konacoffeepremium_0466.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dark Chocolate Kona Coffee Beans',
      description: 'Chocolate-covered whole Kona Coffee beans, a snack that’s a little bit of both.',
      product_info_id: 4,
      vendor_info_id: 1,
      price: 12.00,
      qty: 5000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/2/0/2016-09-02_coffee_beans-1.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Milk Chocolate Dipped Sakura Arare',
      description: 'The Japanese rice cracker, known as arare, has become a snack staple in Hawaii. Thin; crunchy; with a salty, soy-sauce-inspired bite. Traditionally eaten straight, they can also be mixed in with popcorn, and now, they’re partially dipped in milk chocolate!',
      product_info_id: 4,
      vendor_info_id: 1,
      price: 7.70,
      qty: 5000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/s/a/sakuraarare_0639-edit-6.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Li Hing Mui Cookies',
      description: 'These exceptional shortbread cookies are lightly dusted with a sweet and salty plum powder.',
      product_info_id: 6,
      vendor_info_id: 1,
      price: 6.50,
      qty: 5000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/l/i/lihingmuicookies_0597-3.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pineapple Shortbread',
      description: 'Real pineapple juice is baked right into these remarkably refreshing shortbread cookies.',
      product_info_id: 6,
      vendor_info_id: 1,
      price: 12.50,
      qty: 5000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/3/7/3706sbpineapple_0117centered.jpg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mika Passion Chocolates',
      description: 'We blend real Hawaiian passion-fruit juice with butter and our creamy white coating, then lovingly surround it in dark chocolate to create a refreshing, tropical-vacation-inspired treat.',
      product_info_id: 6,
      vendor_info_id: 1,
      price: 12.75,
      qty: 5000,
      image: 'https://bic-bigislandcandies.netdna-ssl.com/media/catalog/product/cache/1/image/320x/9df78eab33525d08d6e5fb8d27136e95/m/i/mikapassion_0674-1.jpg',
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
