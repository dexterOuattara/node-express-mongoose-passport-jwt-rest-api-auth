var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OccupationSchema = new Schema({
  OccupationName: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Occupation', OccupationSchema);
