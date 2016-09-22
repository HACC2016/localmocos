'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfoService = sequelize.define('VendorInfoService', {
    vendor_info_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    other_service: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.STRING
    }
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