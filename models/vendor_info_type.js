'use strict';
module.exports = function(sequelize, DataTypes) {
  var VendorInfoType = sequelize.define('VendorInfoType', {
    vendor_info_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {
    tableName: 'vendor_info_types',
    classMethods: {
      associate: function(models) {
        models.VendorInfoType.belongsTo(models.VendorInfo, {
          foreignKey: 'vendor_info_id',
          targetKey: 'id'
        })
        models.VendorInfoType.belongsTo(models.Type, {
          foreignKey: 'type_id',
          targetKey: 'id'
        })
      }
    }
  });
  return VendorInfoType;
};