'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfoType = sequelize.define('VendorInfoType', {
    vendor_info_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {
    tableName: 'vendor_info_types',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return VendorInfoType;
};