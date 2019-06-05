const express = require("express");
const app = express();

var homeRoutes = require("./routes/home");

var config = require("./utils/config.json");
var mongo = require('express-mongo-db');

const port = config.port;
const ip = config.ip;

/*
Uncomment to connect to Mongo

app.use(mongo(config.mongoURI));
*/

app.use("/", homeRoutes);





app.use(express.static("public"));
app.use(express.static("views"));


app.listen(port, ip, () =>
  console.log(`Example app listening on port ${port}!`)
);