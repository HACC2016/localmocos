'use strict';
module.exports = function(sequelize, DataTypes) {
  var Service = sequelize.define('Service', {
    service: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'services',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Service;
};