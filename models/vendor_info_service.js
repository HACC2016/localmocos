'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfoService = sequelize.define('VendorInfoService', {
    vendor_info_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER
  }, {
    tableName: 'vendor_info_services',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return VendorInfoService;
};