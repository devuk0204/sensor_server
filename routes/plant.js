const express = require('express');
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Op } = require('sequelize');
const { Sensor_plant, Analysis_result } = require('../models');

const router = express.Router();
