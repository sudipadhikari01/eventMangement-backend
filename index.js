// import express
let express = require("express");

// import body-parser
let bodyParser = require("body-parser");
let cors = require("cors");
// port
var port = process.env.PORT || 8080;

const path = require("path");

// api routes
let apiRoutes = require("./routes/api-route");
// // import db connection
let dbConnection = require("./services/db-connection");

// initialize express
let app = express();

// body-parser to handle post request

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", apiRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));
// api route middleware

//

// index page
app.get("/", (req, res) => {
  res.send("<h1>Server Connected</h1>");
});

var db = dbConnection.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("db opened");
});

if (!db) {
  console.log("error connecting db");
} else {
  console.log("db  connected successfully");
}

// listening server
app.listen(port, () => {
  console.log("Running project on port: " + port);
});
