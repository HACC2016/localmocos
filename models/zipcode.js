'use strict';
module.exports = function(sequelize, DataTypes) {
  var Zipcode = sequelize.define('Zipcode', {
    city: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    island: DataTypes.STRING
  }, {
    tableName: 'zipcodes',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Zipcode;
};