const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get("/", (req, res) => {
  db.find((err, data) => {
    res.render("index", { data });
  });
});


module.exports = router;
