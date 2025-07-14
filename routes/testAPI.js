var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const now = new Date().toLocaleString();
  res.json({
    status: "✅ API is working properly",
    datetime: now
  });
});
