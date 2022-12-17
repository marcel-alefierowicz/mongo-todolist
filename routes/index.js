const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get("/", async (req, res) => {
  const completed = await db.find({ done: true });
  const active = await db.find({ done: false });

  res.render("index", { completed: completed, active: active });
  // console.table(completed);
  // console.table(active);
  // console.log(window.location)
});

router.get("/filter/:date", async (req, res) => {

    // console.log(new Date(req.params.date))

    const completed = await db.find({
      done: true,
      due_date: new Date(req.params.date)
    });
    const active = await db.find({
      done: false,
      due_date: new Date(req.params.date)
    })
    res.render("index", { completed: completed, active: active, filtered: true });
    // console.log(window.location)
});

module.exports = router;
