var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user', function (req, res) {

  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });

});

/* SIGNUP USER */


router.post('/signup', function (req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({ success: false, msg: 'Please use an email and password.' });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      bio: req.body.bio,
      typeUser: req.body.typeUser
    });
    // save the user
    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: 'Email already exists.' });
      }
      res.json({ success: true, msg: 'Successful created new user.' });
    });
  }
});

/* SIGNIN USER */

router.post('/signin', function (req, res) {
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. Email not found.' });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret, {
            expiresIn: 604800 // 1 week
          });
          // return the information including token as JSON
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});

/* SIGNOUT USER */


router.get('/signout', passport.authenticate('jwt', { session: false }), function (req, res) {
  req.logout();
  res.json({ success: true, msg: 'Sign out successfully.' });
});

var getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else { 
      return null;
    }
  } else {
    return null;
  }
};


module.exports = router;
