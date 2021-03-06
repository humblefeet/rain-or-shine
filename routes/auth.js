require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");
const jwt = require('jsonwebtoken');

// Route for signing up (creating a new account)
router.post('/signup', (req, res) => {
  // See if the email is already in the DB
  User.findOne({email: req.body.email}, function(err, user) {
    if (user) {
      // Email is already in the DB. Alert the user.
      console.log("Email found in db")
      res.json({
        type: 'auth_error',
        status: 401,
        message: "Email already exists"
      });
    } else {
      // Email is available, create the user in the DB
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }, function(err, user) {
        // check for any DB errors
        if (err) {
          console.log("got a db error")
          // Some error occurred creating the user
          res.json({
            type: 'db_error',
            status: 500,
            message: "Database error occurred when creating the account",
            error: err
          });
        } else {
          console.log("success")
          // Log the user in (sign a new token)
          var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24
          });
          // Return user and token to React app
          res.json({
            type: 'success',
            status: 200,
            user,
            token
          });
        }
      })
    }
  })
});

router.post('/login', (req, res) => {
  // Look up user in the DB
  User.findOne({email: req.body.email}, function(err, user) {
    if (user) {
      // If there is a user, check their entered password against the DB hash
      if (user.authenticated(req.body.password)) {
        // if it matches: log them in (sign a token)
        var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24
        });
        res.json({
          type: 'success',
          status: 200,
          user,
          token
        });
      } else {
        // Authentication failed: send an error
        res.json({
          type: 'auth_error',
          status: 401,
          message: 'Email or password is incorrect'
        });
      }
    } else {
      // if the user isn't in the DB...
      res.json({
        type: 'auth_error',
        status: 401,
        message: 'Account not found'
      });
    }
  })
});

router.post('/me/from/token', (req, res) => {
  let token = req.body.token;
  // Check for the presence of a token
  if (!token) {
    // They didn't send me a token
    res.json({
      type: 'auth_error',
      status: 401,
      message: "Unauthorized. You must pass a valid token."
    })
  } else {
    // We do have a token. Verify it.
    jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
      if (err) {
        // If the token is invalid, send an error
        res.json({
          type: 'auth_error',
          status: 401,
          message: "Invalid token. Please log in again."
        });
      } else {
        // If token is valid, look up the user in the DB
        User.findById(user._id, function(err, user) {
          if (err) {
            res.json({
              type: 'db_error',
              status: 500,
              message: 'Database error occurred while validating your account.',
              error: err
            });
          } else {
            // send the user and the token back to the React app
            res.json({
              type: 'success',
              status: 200,
              user,
              token
            });
          }
        })
      }
    })
  }
});

module.exports = router;
