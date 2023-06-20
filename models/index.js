const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const Plant = require('./plant');
const Sensor_plant = require('./sensor_plant');
const Analysis_minute = require('./analysis_minute');
const Analysis_day = require('./analysis_day');
const Analysis_month = require('./analysis_month');
const Analysis_result = require('./analysis_result');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Plant = Plant;
db.Sensor_plant = Sensor_plant;
db.Analysis_minute = Analysis_minute;
db.Analysis_day = Analysis_day;
db.Analysis_month = Analysis_month;
db.Analysis_result = Analysis_result;

console.log(db);

Plant.init(sequelize);
Sensor_plant.init(sequelize);
Analysis_minute.init(sequelize);
Analysis_day.init(sequelize);
Analysis_month.init(sequelize);
Analysis_result.init(sequelize);

Plant.associate(db);
Sensor_plant.associate(db);
Analysis_minute.associate(db);
Analysis_day.associate(db);
Analysis_month.associate(db);
Analysis_result.associate(db);


module.exports = db;
