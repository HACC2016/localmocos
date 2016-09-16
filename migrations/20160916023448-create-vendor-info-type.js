'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('vendor_info_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vendor_info_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'vendor_infos',
          key: 'id'
        }
      },
      type_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'types',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('vendor_info_types');
  }
};