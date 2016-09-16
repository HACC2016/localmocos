'use strict';
module.exports = function(sequelize, DataTypes) {
  var Certification = sequelize.define('Certification', {
    specialty: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'certifications',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Certification.belongsTo(models.Product, {
          foreignKey: 'product_id',
          targetKey: 'id'
        });
      }
    }
  });
  return Certification;
};