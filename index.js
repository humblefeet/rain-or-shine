require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const auth = require('./routes/auth');
const locked = require('./routes/locked');

const app = express();

const weatherAPI = require('./routes/api')
const favorites = require('./routes/favorites')
// This line lets us accept POST data from axios
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/rainorshine');

app.use(express.static(__dirname + "/client/build"));

app.use('/auth', auth);
// This line uses the express-jwt node module to protect the routes
app.use('/locked', expressJWT({secret: process.env.JWT_SECRET}).unless({method: 'POST'}), locked);

app.use('/api', weatherAPI)
app.use('/favorites', favorites)

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

var port = process.env.PORT || 3001;

var server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
});

module.exports = server;
