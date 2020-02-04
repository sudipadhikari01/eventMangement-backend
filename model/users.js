var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// setup schema
var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

// export User model
module.exports = mongoose.model("User", userSchema);
