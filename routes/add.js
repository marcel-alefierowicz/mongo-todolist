const express = require("express");
const router = express.Router();
const db = require("../models/db");


router.get('/', (req,res) => {
  res.render('add');
})

router.post("/", (req, res) => {
  const {title, content, due_date} = req.body

  const dd = new Date(due_date);
  const created_at = new Date();

  const item = new db({
    title: title,
    content: content,
    created_at: created_at,
    due_date: dd
  });

  item.save((err) => {
    err ? console.log(err) : res.redirect('/') 
  })

});

module.exports = router;
