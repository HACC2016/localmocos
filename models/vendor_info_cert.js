'use strict';
module.exports = function(sequelize, DataTypes) {
  var vendor_info_cert = sequelize.define('vendor_info_cert', {
    vendor_info_id: DataTypes.INTEGER,
    cert_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return vendor_info_cert;
};