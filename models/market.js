'use strict';
module.exports = function(sequelize, DataTypes) {
  var Market = sequelize.define('Market', {
    market: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'markets',
    classMethods: {
      associate: function(models) {
        models.Market.belongsToMany(models.VendorInfo, {
          through: models.VendorInfoMarket,
          foreignKey: 'market_id'
        })
      }
    }
  });
  return Market;
};