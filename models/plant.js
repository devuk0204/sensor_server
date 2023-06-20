const Sequelize = require('sequelize');

module.exports = class Plant extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      p_name: {
        primaryKey: true,
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      h_soil: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      h_temperature: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      h_humidity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      h_sunshine: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      min_limit_temperature: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Plant',
      tableName: 'Plants',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Plant.hasMany(db.Sensor_plant, {
        foreignKey: {
            name: 'p_name',
            allowNull: false,
            onDelete: 'SET NULL',
            onUpdate: 'RESTRICT',
        }, sourceKey: 'p_name'
    })
  }
};
