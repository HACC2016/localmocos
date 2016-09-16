'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProductType = sequelize.define('ProductType', {
    type: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'product_types',
    classMethods: {
      associate: function(models) {
        models.ProductType.hasMany(models.ProductInfo, {
          foreignKey: 'product_type_id'
        });
      }
    }
  });
  return ProductType;
};