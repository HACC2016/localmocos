'use strict';
module.exports = function(sequelize, DataTypes) {
  var Certification = sequelize.define('Certification', {
    specialty: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Certification.belongsTo(models.Product);
      }
    }
  });
  return Certification;
};