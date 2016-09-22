'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfoCert = sequelize.define('VendorInfoCert', {
    vendor_info_id: DataTypes.INTEGER,
    cert_id: DataTypes.INTEGER
  }, {
    tableName: 'vendor_info_certs',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return VendorInfoCert;
};