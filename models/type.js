'use strict';
module.exports = function(sequelize, DataTypes) {
  var Type = sequelize.define('Type', {
    job: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'types',
    classMethods: {
      associate: function(models) {
        models.Type.belongsToMany(models.VendorInfo, {
          through: models.VendorInfoType,
          foreignKey: 'type_id'
        });
      }
    }
  });
  return Type;
};