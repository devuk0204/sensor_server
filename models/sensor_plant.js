const Sequelize = require('sequelize');

module.exports = class Sensor_plant extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      register_no: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      p_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      p_height: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      current_humidity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      current_temperature: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      current_soil_humidity: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      module_no: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      updatedAt: 'update_date',
      createdAt: 'register_date',
      underscored: false,
      modelName: 'Sensor_plant',
      tableName: 'Sensor_plants',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
  }
};
