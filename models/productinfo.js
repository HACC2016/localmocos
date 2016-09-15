'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProductInfo = sequelize.define('ProductInfo', {
    product_type_id: DataTypes.INTEGER,
    specific_type: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.ProductInfo.belongsTo(models.ProductType);
      }
    }
  });
  return ProductInfo;
};