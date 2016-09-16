'use strict';
module.exports = function(sequelize, DataTypes) {
  var vendor_info_service = sequelize.define('vendor_info_service', {
    vendor_info_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return vendor_info_service;
};