const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get("/", async (req, res) => {

  const completed = await db.find({done:true});
  const active = await db.find({done:false})

  res.render('index', {completed: completed, active:active});
  // console.log(completed)
});

router.get("/:date", async (req, res) => {

  console.log(req.params.date)

  const completed = await db.find({done:true, created_at: new Date(req.params.date)});
  const active = await db.find({done:false, created_at: new Date(req.params.date)})

  res.render('index', {completed: completed, active:active});
  // console.log(completed)
});


module.exports = router;
