'use strict';
module.exports = function(sequelize, DataTypes) {
  var Market = sequelize.define('Market', {
    market: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Market;
};