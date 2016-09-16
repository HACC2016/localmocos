'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfo = sequelize.define('VendorInfo', {
    user_id: DataTypes.INTEGER
  }, {
    tableName: 'vendor_infos',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.VendorInfo.belongsTo(models.User, {
          foreignKey: 'user_id',
          targetKey: 'id'
        });
        models.VendorInfo.hasMany(models.Product, {
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.hasMany(models.Type, {
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.hasMany(models.Market, {
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.hasMany(models.Certification, {
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.hasMany(models.Service, {
          foreignKey: 'vendor_info_id'
        });
      }
    }
  });
  return VendorInfo;
};