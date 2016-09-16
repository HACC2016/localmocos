'use strict';
module.exports = function(sequelize, DataTypes) {
  var Type = sequelize.define('Type', {
    job: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'types',
    name: {
      singular: 'type',
      plural: 'types'
    },
    classMethods: {
      associate: function(models) {
        models.Type.belongsToMany(models.VendorInfo, {
          through: models.VendorInfoType,
          foreignKey: 'vendor_info_id'
        })
      }
    }
  });
  return Type;
};