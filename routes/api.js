const weatherAPIController = require("../Controllers/weatherAPIController");
var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");
const DARK_SKY_BASE_URL = "https://api.darksky.net/forecast/";
const DARK_SKY_WEATHER_API_KEY = process.env.DARK_SKY_WEATHER_API_KEY;
const request = require("request");
// var app = express();
var latitude = 47.62;
var longitude = -122.32;

router.get("/weather", function(req, res) {
  var url = `${DARK_SKY_BASE_URL}${DARK_SKY_WEATHER_API_KEY}/${latitude},${longitude}`;
  console.log(url);
  request(url, function(err, response, body) {
    // console.log("this is what we got back:", JSON.parse(body));
    res.json(JSON.parse(body));
  });
});

module.exports = router;
