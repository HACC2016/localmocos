'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    tableName: 'users',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.User.hasOne(models.VendorInfo, {
          foreignKey: 'user_id',
        });
      }
    }
  });
  return User;
};