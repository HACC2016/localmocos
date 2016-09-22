'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfoMarket = sequelize.define('VendorInfoMarket', {
    vendor_info_id: DataTypes.INTEGER,
    market_id: DataTypes.INTEGER,
    other_market: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.STRING
    }
  }, {
    tableName: 'vendor_info_markets',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return VendorInfoMarket;
};