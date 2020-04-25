var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Interest = require("../models/interest");


/* ALL INTEREST */

router.get('/', function (req, res) {

  Interest.find(function (err, interests) {
    if (err) return next(err);
    res.json(interests);
  });

});

/* SAVE NEW INTEREST */

router.post('/', function(req, res, next) {
  Interest.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE INTEREST BY ID */
router.get('/:id', function(req, res, next) {
  Interest.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE INTEREST */
router.put('/:id', function(req, res, next) {
  Interest.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE INTEREST */
router.delete('/:id', function(req, res, next) {
  Interest.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
