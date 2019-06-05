var express = require("express");
var router = express.Router();
var path = require("path");
var product = require("../models/product");
var helper = require("../utils/helper")

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
});

// define the home page route
router.get("/get-products", function(req, res) {
  product.all(req.db).then(function(data) {
    res.send({ highlights: data, circuits: data });
  });
});

// define the about route
router.get("/format-price/:price", function(req, res) {
  res.send(helper.formatNumber(req.params.price));
});

module.exports = router;