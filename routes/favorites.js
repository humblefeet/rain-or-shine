var express = require("express");
var router = express.Router();
var Favorite = require('../models/Favorite')
var User  = require('../models/User')

router.get('/', function(req,res,next){
    Favorite.find({}, (err, favorites)=>{
        if(err)return next(err);
        console.log(favorites)
    })
})

router.post('/', (req,res,next)=>{
    Favorite.create({
        venueId: req.body.venueId,
        venueName: req.body.venueName,
        address: req.body.address,
        icon: req.body.icon
    },(err, favorite)=>{
        User.findById(req.body.id,  (err,user)=>{
            user.favorites.push(favorite._id);
            user.save();
        })
    })
})

module.exports = router
