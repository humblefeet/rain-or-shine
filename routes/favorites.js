var express = require("express");
var router = express.Router();
var Favorite = require('../models/Favorite')

router.get('/all', function(res,req,next){
    Favorite.find({}, function(err, favorites){
        if(err)return next(err);

        // res.send(favorites)
    })
})

router.get('/:id', function(res,req,next){
    Favorite.findById(req.params.id, function(err, favorite){
        if(err)return next(err);
        // res.send(favorite)
    })
})

module.exports = router
