'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      venderInfo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'vender_infos',
          key: 'id'
        }
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      qty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cert_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'certifications',
          key: 'id'
        }
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      isActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('products');
  }
};