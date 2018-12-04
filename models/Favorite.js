var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var favoriteSchema = new Schema({
    venueName: String,
    address:  String,
    icon: String,
    venueId: String
});

module.exports = mongoose.model('Favorite', favoriteSchema);