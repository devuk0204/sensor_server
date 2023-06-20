const Sequelize = require('sequelize');

module.exports = class Analysis_result extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      p_name: {
        primaryKey: true,
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      recommend_temperature: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      recommend_humidity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Analysis_result',
      tableName: 'Analysis_results',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
  }
};
