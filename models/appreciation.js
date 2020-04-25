var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppreciationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Appreciation', AppreciationSchema);
