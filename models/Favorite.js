var mongoose = require('mongoose');

var favoriteSchema = new mongoose.Schema({
    venueName: String,
    address:  String,
    icon: String,
    venueId: Number 
});

module.exports = mongoose.model('Favorite', favoriteSchema);