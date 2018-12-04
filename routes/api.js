var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");
const DARK_SKY_BASE_URL = "https://api.darksky.net/forecast/";
const DARK_SKY_WEATHER_API_KEY = process.env.DARK_SKY_WEATHER_API_KEY;
const FOURSQUARE_BASE_URL = "https://api.foursquare.com/v2/venues/";
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
var rain = "4bf58dd8d48988d1fa931735,56aa371be4b08b9a8d5734db,4fceea171983d5d06c3e9823,4bf58dd8d48988d1e1931735,4bf58dd8d48988d1e2931735,4bf58dd8d48988d1e4931735,4bf58dd8d48988d17c941735,52e81612bcbc57f1066b79e7,4bf58dd8d48988d18e941735,5032792091d4c4b30a586d5c,52e81612bcbc57f1066b79ef,56aa371be4b08b9a8d573532,4bf58dd8d48988d1f1931735,52e81612bcbc57f1066b79e6,4bf58dd8d48988d17f941735,4bf58dd8d48988d181941735,4bf58dd8d48988d1e5931735,4bf58dd8d48988d1f2931735,4bf58dd8d48988d1e3931735,52e81612bcbc57f1066b79e9,4bf58dd8d48988d1ac941735,4d4b7105d754a06373d81259,4d4b7105d754a06374d81259,4d4b7105d754a06376d81259,56aa371be4b08b9a8d57351a,52f2ab2ebcbc57f1066b8b47,503289d391d4c4b30a586d6a,52f2ab2ebcbc57f1066b8b49,4bf58dd8d48988d105941735,52f2ab2ebcbc57f1066b8b48,4bf58dd8d48988d176941735,4bf58dd8d48988d101941735,5744ccdfe4b0c0459246b4b2,590a0744340a5803fd8508c3,4bf58dd8d48988d102941735,4bf58dd8d48988d168941735,4bf58dd8d48988d131941735,52e81612bcbc57f1066b7a39,4bf58dd8d48988d12f941735,52e81612bcbc57f1066b7a32,52e81612bcbc57f1066b7a35,56aa371be4b08b9a8d5734cf,4bf58dd8d48988d173941735,58daa1558bbb0b01f18ec1d6,4e52d2d203646f7c19daa8ae,56aa371ce4b08b9a8d573570,52e81612bcbc57f1066b7a43,58daa1558bbb0b01f18ec200,52e81612bcbc57f1066b7a48,4f04b10d2fb6e1c99f3db0be,52e81612bcbc57f1066b7a33,5267e446e4b0ec79466e48c4,4bf58dd8d48988d116951735,4bf58dd8d48988d127951735,52f2ab2ebcbc57f1066b8b43,52e81612bcbc57f1066b7a27,4bf58dd8d48988d115951735,4bf58dd8d48988d1f1941735,4bf58dd8d48988d114951735,4eb1bdf03b7b55596b4a7491,4bf58dd8d48988d117951735,52f2ab2ebcbc57f1066b8b31,4bf58dd8d48988d103951735,52f2ab2ebcbc57f1066b8b18,4bf58dd8d48988d10c951735,52f2ab2ebcbc57f1066b8b17,4bf58dd8d48988d1f6941735,4bf58dd8d48988d1f4941735,52dea92d3cf9994f4e043dbb,52f2ab2ebcbc57f1066b8b1a,4bf58dd8d48988d122951735,56aa371be4b08b9a8d573554,5454152e498ef71e2b9132c6,52f2ab2ebcbc57f1066b8b26,56aa371be4b08b9a8d573523,52f2ab2ebcbc57f1066b8b16,4bf58dd8d48988d1f7941735,4bf58dd8d48988d1f9941735,52f2ab2ebcbc57f1066b8b24,52f2ab2ebcbc57f1066b8b1c,4bf58dd8d48988d1f8941735,4bf58dd8d48988d18d941735,4eb1c0253b7b52c0e1adc2e9,4bf58dd8d48988d128951735,54541900498ea6ccd0202697,52f2ab2ebcbc57f1066b8b2c,4bf58dd8d48988d1fb941735,50aaa5234b90af0d42d5de12,4bf58dd8d48988d1f0941735,4bf58dd8d48988d111951735,58daa1558bbb0b01f18ec1b4,52f2ab2ebcbc57f1066b8b25,52c71aaf3cf9994f4e043d17,50be8ee891d4fa8dcc7199a7,52f2ab2ebcbc57f1066b8b3c,4bf58dd8d48988d1fe941735,4f04aa0c2fb6e1c99f3db0b8,52f2ab2ebcbc57f1066b8b22,5744ccdfe4b0c0459246b4df,52f2ab2ebcbc57f1066b8b35,52f2ab2ebcbc57f1066b8b34,4bf58dd8d48988d100951735,4eb1bdde3b7b55596b4a7490,554a5e17498efabeda6cc559,52f2ab2ebcbc57f1066b8b20,52f2ab2ebcbc57f1066b8b3d,52f2ab2ebcbc57f1066b8b28,4bf58dd8d48988d10d951735,52f2ab2ebcbc57f1066b8b37,4bf58dd8d48988d110951735,58daa1558bbb0b01f18ec1ae,4bf58dd8d48988d1fd941735,5bae9231bedf3950379f89d2,56aa371be4b08b9a8d573566,52f2ab2ebcbc57f1066b8b41,4bf58dd8d48988d1f2941735,5032781d91d4c4b30a586d5b,4bf58dd8d48988d101951735,4bf58dd8d48988d1de931735,4bf58dd8d48988d1f3941735,52f2ab2ebcbc57f1066b8b30,4bf58dd8d48988d10b951735,4bf58dd8d48988d126951735,52f2ab2ebcbc57f1066b8b2e"
var sun ='4d4b7105d754a06377d81259,4d4b7104d754a06370d81259,58daa1558bbb0b01f18ec1d6,52e81612bcbc57f1066b7a32,4bf58dd8d48988d171941735,4eb1daf44b900d56c88a4600,4bf58dd8d48988d12d941735,4bf58dd8d48988d12f941735,5744ccdfe4b0c0459246b4d9,52e81612bcbc57f1066b7a49,4bf58dd8d48988d131941735,4bf58dd8d48988d14b941735,4bf58dd8d48988d114951735,4bf58dd8d48988d103951735,56aa371be4b08b9a8d573554,4bf58dd8d48988d1f7941735,4bf58dd8d48988d1fa941735,53e0feef498e5aac066fd8a9,52c71aaf3cf9994f4e043d17,52f2ab2ebcbc57f1066b8b22,5744ccdfe4b0c0459246b4df,52f2ab2ebcbc57f1066b8b35,4bf58dd8d48988d1fd941735,5744ccdfe4b0c0459246b4dc,4bf58dd8d48988d1f2941735,4bf58dd8d48988d101951735,4e4c9077bd41f78e849722f9,5744ccdfe4b0c0459246b4c1,4bf58dd8d48988d12d951735,52f2ab2ebcbc57f1066b8b50,55077a22498e5e9248869ba2,4bf58dd8d48988d1fa931735,4e74f6cabd41c4836eac4c31'
var categories;

var weatherUrl = `${DARK_SKY_BASE_URL}${DARK_SKY_WEATHER_API_KEY}/${latitude},${longitude}`;


// getUserLocation = () => {
//     var options = {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//     };
//     function success(pos) {
//         var crd = pos.coords;
//         this.setState({
//         latitude: crd.latitude.toFixed(2),
//         longitude: crd.longitude.toFixed(2)
//         });
//     }
//     function error(err) {
//         console.warn(`ERROR(${err.code}): ${err.message}`);
//     }
//     navigator.geolocation.getCurrentPosition(success, error, options);
// };

// getUserLocation();


router.get("/weather", function(req, res) {
    request(weatherUrl, function(err, response, weather) {
        var temperature = weather.response
        // .currently.temperature;
        var precipitation = weather.response
        // .currently.precipProbability*100;

        if (precipitation > 50){ 
            categories= `categoryId=${rain}`        
        }else if (precipitation < 50 && precipitation >25 && temperature > 65){
            categories=`categoryId=${rain},${sun}`
        }else if (precipitation < 25  && temp > 50){
            categories=`categoryId=${sun}`
        }
        var foursquareUrl = `${FOURSQUARE_BASE_URL}explore?ll=${latitude},${longitude}
        &client_id=${process.env.FOURSQUARE_CLIENT_ID}
        &client_secret=${process.env.FOURSQUARE_CLIENT_SECRET}
        &v=${todayDate}&${categories}`;

        request(foursquareUrl, function(err, response, venues) {
            var superData=  Object.assign({},JSON.parse(venues),JSON.parse(weather))
            res.json(superData)
        })
    })
})



module.exports = router
