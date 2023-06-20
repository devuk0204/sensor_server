const Sequelize = require('sequelize');

module.exports = class Analysis_day extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      register_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      p_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      humidity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      temperature: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      soil_humidity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      updatedAt: false,
      createdAt: true,
      underscored: false,
      modelName: 'Analysis_day',
      tableName: 'Analysis_days',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
  }
};
