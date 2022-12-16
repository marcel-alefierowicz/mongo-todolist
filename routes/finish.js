const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.post("/:id", (req, res) => {
  const id = req.params.id;
  db.updateOne({ _id: id }, {done:true}).then(() => {
    res.redirect('/');
  });
});

module.exports = router;
