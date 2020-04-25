var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Appreciation = require("../models/appreciation");

/* ALL APPRECIATION */

router.get('/appreciation', function (req, res) {

  Appreciation.find(function (err, appreciations) {
    if (err) return next(err);
    res.json(appreciations);
  });

});

/* SAVE NEW APPRECIATION */

router.post('/', function(req, res, next) {
  Interest.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE APPRECIATION BY ID */

router.get('/:id', function(req, res, next) {
  Interest.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE APPRECIATION */
router.put('/:id', function(req, res, next) {
  Interest.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE APPRECIATION */

router.delete('/:id', function(req, res, next) {
  Interest.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
