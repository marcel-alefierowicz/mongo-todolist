const express = require("express");
const router = express.Router();
const db = require("../models/db");


router.get('/:id', (req,res) => {
  
  const data = db.find({_id: req.params.id},(err, data) => {
    console.log(data);
    res.render("edit", { data: data });
  });
})

router.post("/", (req, res) => {
  const {title, content, due_date} = req.body

  const dd = new Date(due_date);
  const created_at = new Date();

  const item = new db({
    title: title,
    content: content,
    created_at: created_at,
    due_date: dd,
    done: false
  });

  item.save((err) => {
    err ? console.log(err) : res.redirect('/') 
  })

});

module.exports = router;
