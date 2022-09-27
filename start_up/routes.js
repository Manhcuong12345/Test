const express = require("express");
const productRoute = require("../route/product");
const categoryRoute = require("../route/category");

module.exports = function (app) {
  app.use(express.json());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-OrigWin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-auth-token"
    );
    res.header("Access-Control-Expose-Headers", "x-auth-token");
    next();
  });
  app.use("/api/product", productRoute);
  app.use("/api/category", categoryRoute);
};
