const weatherAPIController = require('../Controllers/weatherAPIController')
var express = require('express');
var router = express.Router();

router.get('/weather', weatherAPIController.getWeather)

module.exports=router