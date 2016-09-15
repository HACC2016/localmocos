'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProductType = sequelize.define('ProductType', {
    type: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'product_types',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProductType;
};