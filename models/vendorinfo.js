'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfo = sequelize.define('VendorInfo', {
    user_id: DataTypes.INTEGER
  }, {
    tableName: 'vendor_infos',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.VendorInfo.belongsTo(models.User);
        models.VendorInfo.hasMany(models.Product);
        models.VendorInfo.hasMany(models.Type);
        models.VendorInfo.hasMany(models.Market);
        models.VendorInfo.hasMany(models.Certification);
        models.VendorInfo.hasMany(models.Service);
      }
    }
  });
  return VendorInfo;
};