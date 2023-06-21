const express = require('express');
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Op } = require('sequelize');
const { Sensor_plant, Analysis_result, Analysis_month, Analysis_minute, Plant } = require('../models');

const router = express.Router();

// router.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });


// router.get('/join', isNotLoggedIn, (req, res) => {
//   res.render('join', { title: '회원가입' });
// });

// router.get('/login', isNotLoggedIn, (req, res) => {
//   res.render('login', { title: '로그인' });
// });

router.get('/list', async(req, res, next) => {
  try{
    console.log('-------------------------------------------');
    const plants = await Sensor_plant.findOne({});
    const result = {
      register_no: plants.register_no,
      name: plants.p_name,
    };
    res.send(result);
  } catch(error) {
    console.error(error);
    next(error);
  }
});


router.get('/info', async(req, res, next) => {
  try{
    console.log('-------------------------------------------');
    const plants = await Sensor_plant.findOne({});
    const result = {
      register_no: plants.register_no,
      name: plants.p_name,
      height: plants.p_height,
      c_humidity: plants.current_humidity,
      c_temperature: plants.current_temperature,
      c_soil_humidity: plants.current_soil_humidity,
    };
    res.send(result);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.get('/environment', async(req, res, next) => {
  try{
    console.log('-------------------------------------------');
    const plants = await Sensor_plant.findOne({});
    const recommend = await Plant.findOne({});
    let temp = plants.current_temperature;
    let c_temp = recommend.h_temperature;
    let humidity = plants.current_humidity;
    let c_humidity = recommend.h_humidity;
    let t_difference = 0
    let t_higher = ''
    let c_difference = 0
    let c_higher = ''
    if(temp >= c_temp) {
      t_higher = '높음';
      t_difference = temp - c_temp;
    } else {
      t_higher = '낮음';
      t_difference = c_temp - temp;
    }
    if(humidity >= c_humidity) {
      c_higher = '높음';
      c_difference = humidity - c_humidity;
    } else {
      c_higher = '낮음';
      c_difference = c_humidity - humidity;
    }
    const result = {
      temperature_n: t_difference,
      temperature_higher: t_higher,
      humidity_n: c_difference,
      humidity_higher: c_higher
    };
    res.send(result);
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.post('/height', async(req, res) => {
  const { height } = req.body;
  console.log('-------------------------------------------');
  console.log(req.body)
  try {
    const plants = await Sensor_plant.findOne({});
    await Analysis_month.create({
      register_no: plants.register_no,
      p_name: plants.p_name,
      p_height: plants.p_height,
      humidity: 1,
      temperature: 1,
      soil_humidity: 1,
    });
    await Sensor_plant.update({
      p_height: height
    }, {
      where: {
        register_no: plants.register_no,
      },
    });
    res.send({code: 'success'});
  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.post('/sensor', async(req, res) => {
  const { temperature, humidity, soil_humidity } = req.body;
  console.log('-------------------------------------------');
  console.log(req.body);
  try{
    const plants = await Sensor_plant.findOne({});
    await Analysis_minute.create({
      register_no: plants.register_no,
      p_name: plants.p_name,
      humidity: humidity,
      temperature: temperature,
      soil_humidity: soil_humidity
    });
    await Sensor_plant.update({
      current_humidity: humidity,
      current_temperature: temperature,
      current_soil_humidity: soil_humidity
    }, {
      where: {
        register_no: plants.register_no
      }
    });
    res.send({result: 'success'});
  } catch(error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
