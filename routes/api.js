var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");
const DARK_SKY_BASE_URL = "https://api.darksky.net/forecast/";
const DARK_SKY_WEATHER_API_KEY = process.env.DARK_SKY_WEATHER_API_KEY;
const FOURSQUARE_BASE_URL = "https://api.foursquare.com/v2/venues/explore";
const FOURSQUARE_CLIENT_ID = process.env.FOURSQUARE_CLIENT_ID;
const FOURSQUARE_CLIENT_SECRET = process.env.FOURSQUARE_CLIENT_SECRET;
const request = require("request");
var todayDate = new Date()
    .toISOString()
    .slice(0, 10)
    .split("-")
    .join("");
var latitude = 47.62;
var longitude = -122.32;

router.get("/weather", function(req, res) {
    var url = `${DARK_SKY_BASE_URL}${DARK_SKY_WEATHER_API_KEY}/${latitude},${longitude}`;
    console.log(url);
    request(url, function(err, response, body) {
        res.json(JSON.parse(body));
    });
});

router.get("/recommendations", function(req, res) {
    //if (this.state.precipitation > 50) {query indoor venues}
    //if (this.state.precipitation < 50 && this.state.precipitation >25 && this.state.temperature > 65){query all venues}
    //if (this.state.precipitation < 25  || weatherDescription  === 'sunny'){var query=''}
    var url = `${FOURSQUARE_BASE_URL}?ll=${latitude},${longitude}
        &client_id=${process.env.FOURSQUARE_CLIENT_ID}
        &client_secret=${process.env.FOURSQUARE_CLIENT_SECRET}
        &v=${todayDate}`;
    console.log(url);
    request(url, function(err, response, body) {
        res.json(JSON.parse(body));
    });
});

module.exports = router;
