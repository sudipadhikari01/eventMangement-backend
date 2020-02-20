// import mongoose
let mongoose = require("mongoose");

// connect mongodb and set connection varibale
var mongoDB = "mongodb://127.0.0.1/event";
// mongoose.connect(mongoDB, { useUnifiedTopology: true });
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose;
