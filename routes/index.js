const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get("/", async (req, res) => {
  const completed = await db.find({ done: true });
  const active = await db.find({ done: false });

  res.render("index", { completed: completed, active: active });
  // console.table(completed);
  // console.table(active);

});

router.get("/filter/:date", async (req, res) => {

    // console.log(new Date(req.params.date))

    const completed = await db.find({
      done: true,
      created_at: new Date(req.params.date)
    });
    const active = await db.find({
      done: false,
      created_at: new Date(req.params.date)
    })
    res.render("index", { completed: completed, active: active });
});

module.exports = router;
