var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Lang = require("../models/lang");

/* GET ALL LANG */

router.get('/', function (req, res) {

  Lang.find(function (err, langs) {
    if (err) return next(err);
    res.json(langs);
  });

});

/* SAVE NEW LANG */

router.post('/', function(req, res, next) {
  Lang.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE LANG BY ID */
router.get('/:id', function(req, res, next) {
  Lang.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE LANG */
router.put('/:id', function(req, res, next) {
  Lang.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE LANG */
router.delete('/:id', function(req, res, next) {
  Lang.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;
