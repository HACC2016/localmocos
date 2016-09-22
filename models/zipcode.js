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
        models.Zipcode.hasMany(models.VendorInfo, {
          foreignKey: 'zip_id'
        });
      }
    }
  });
  return Zipcode;
};