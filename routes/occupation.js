var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Occupation = require("../models/occupation");

/* GET ALL OCCUPATION */

router.get('/', function (req, res) {

  Occupation.find(function (err, occupations) {
    if (err) return next(err);
    res.json(occupations);
  });

});

/* SAVE NEW POST */

router.post('/', function(req, res, next) {
  Occupation.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE LANG BY ID */
router.get('/:id', function(req, res, next) {
  Occupation.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE LANG */
router.put('/:id', function(req, res, next) {
  Occupation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE LANG */
router.delete('/:id', function(req, res, next) {
  Occupation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
