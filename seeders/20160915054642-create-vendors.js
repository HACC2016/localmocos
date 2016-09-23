'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vendor_infos', [
    {
      user_id: 1,
      image: 'http://www.hawaiibusiness.com/wordpress/wp-content/uploads/2014/11/BIC-11-2014_Permanent-Storefront-at-Ala-Moana-Center.jpg',
      company_name: 'Big Island Candies',
      business_reg_num: 12341234,
      business_description: 'Big Island Candies offers gourmet Hawaiian chocolates, cookies and candies, including our world-renowned Macadamia Nut Chocolate Dipped Shortbread Cookies.',
      dba: 'Big Island Candies',
      address1: '585 Hinano St. Hilo, HI. 96720',
      business_ph: '1-800-935-5510',
      sales_ph: '1-800-935-5510',
      website: 'https://www.bigislandcandies.com',
      email: 'contactus@bigislandcandies.com',
      zip_id: 18,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      image: '/images/Adaptations-Oceanfire.jpg',
      company_name: 'Adaptations/Oceanfire',
      business_reg_num: 12341235,
      business_description: 'Adaptations grows kava, passion fruit vine, lemon balm and gotu kola, which are turned into tinctures and other botanical medicines for worldwide distribution.',
      dba: 'Adaptations/Oceanfire',
      address1: 'PO Box 1070, Captain Cook, HI 96704',
      business_ph: '1-808-324-6600',
      sales_ph: '1-808-324-6600',
      website: 'http://www.adaptationsaloha.com/oceanfire',
      email: 'adaptations-hi@earthlink.net',
      zip_id: 3,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      image: '/images/Bergers-Kamaaina-Farm.jpg',
      company_name: "Berger's Kama'aina Farm",
      business_reg_num: 12341236,
      business_description: 'Land watercress tastes different from watercress grown in water, has a longer shelf life and a characteristic "snap" to it.',
      dba: "Berger's Kama'aina Farm",
      address1: 'P.O. Box 343, Mountain View, Hawaii 96771',
      business_ph: '1-808-968-0648',
      sales_ph: '1-808-968-0648',
      zip_id: 64,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 4,
      image: '/images/Big-Island-Abalone.jpg',
      company_name: 'Big Island Abalone',
      business_reg_num: 12341237,
      business_description: 'Did you know it takes up to 33 months to raise abalone to be ready for distribution? The Big Island Abalone is great, whether grilled or made into sashimi.',
      dba: 'Big Island Abalone',
      address1: "73-4460 Queen Ka'ahumanu Hwy #115, Kailua-Kona, HI 96740",
      business_ph: '1-808-334-0034',
      sales_ph: '1-866-509-1144',
      website: 'http://www.bigislandabalone.com',
      email: 'ldesilva@bigislandabalone.com',
      zip_id: 34,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 5,
      image: '/images/Bromeliads-Hawaii.jpg',
      company_name: 'Bromeliads Hawaii',
      business_reg_num: 12341238,
      business_description: 'Fun Fact: Did you know the pineapple is part of the bromeliad family? Bromeliads are easy to care for and do not require much sun or water.',
      dba: 'Bromeliads Hawaii',
      address1: 'PO Box 1070, Captain Cook, HI 96704',
      business_ph: '1-808-896-0532',
      sales_ph: '1-808-896-0532',
      website: 'http://myworld.ebay.com/royannique76',
      email: 'royanne76@yahoo.com',
      zip_id: 3,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 6,
      image: 'http://healthadvisorgroup.com/wp-content/uploads/2015/10/Papaya-1.jpg',
      company_name: 'Volcano Isle Fruit Company',
      business_reg_num: 12341239,
      business_description: 'We\'re largely focused on papayas. We are based in Kapoho and have been committed to growing the fruit in the rich, volcanic soil of the Big Island for the past 30 years.',
      dba: 'Volcano Isle Fruit Company',
      address1: 'P.O. Box 537, Pahoa, HI. 96778',
      business_ph: '1-808-359-1618',
      sales_ph: '1-808-359-1618',
      website: 'http://www.papayas.net/',
      email: 'sales@papayas.net',
      zip_id: 70,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 7,
      image: 'http://healthadvisorgroup.com/wp-content/uploads/2015/10/Papaya-1.jpg',
      company_name: 'Dole Food Company Hawaii',
      business_reg_num: 12341240,
      business_description: 'Share Hawaiian heritage and culture with family and friends by giving a taste of Hawaii from DOLE. DOLE fruits are grown in rich volcanic soil with warm tropical rainfall, and kissed with Hawaiian sunshine for the best Hawaii has to offer.',
      dba: 'Dole Food Company Hawaii',
      address1: '64-1551 Kamehameha Hwy., Wahiawa, HI 96786',
      business_ph: '1-808-847-3234',
      sales_ph: '1-808-847-3234',
      website: 'http://www.dolefruithawaii.com/',
      email: 'sales@dolefruithawaii.com',
      zip_id: 78,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vendor_infos');
  }
};
