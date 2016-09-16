'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfo = sequelize.define('VendorInfo', {
    user_id: DataTypes.INTEGER,
    dba: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    business_ph: DataTypes.STRING,
    sales_ph: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
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
        models.VendorInfo.belongsToMany(models.Type, {
          through: models.VendorInfoType,
          foreignKey: 'vendor_info_id'
        });
        models.VendorInfo.belongsToMany(models.Market, {
          through: models.VendorInfoMarket,
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