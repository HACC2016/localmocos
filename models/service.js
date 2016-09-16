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
        models.Service.belongsToMany(models.VendorInfo, {
          through: models.vendor_info_service,
          foreignKey: 'service_id'
        });
      }
    }
  });
  return Service;
};