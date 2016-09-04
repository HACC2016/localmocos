'use strict';
module.exports = function(sequelize, DataTypes) {
  var VenderInfo = sequelize.define('VenderInfo', {
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.VenderInfo.belongsTo(models.User);
        models.VenderInfo.hasMany(models.Product);
        models.VenderInfo.hasMany(models.Type);
        models.VenderInfo.hasMany(models.Market);
        models.VenderInfo.hasMany(models.Certification);
        models.VenderInfo.hasMany(models.Service);
      }
    }
  });
  return VenderInfo;
};