var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LangSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  alpha2: {
    type: String,
    required: true
  },
  alpha3: {
    type: String,
    required: true
  },
  numeric: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Lang', LangSchema);
