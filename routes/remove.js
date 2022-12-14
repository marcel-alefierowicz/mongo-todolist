const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.post('/:id', (req,res) => {
    const id = req.params.id;
    const data = db.deleteOne({_id: id}).then(() => {
        res.redirect('/')
    });
})

module.exports = router