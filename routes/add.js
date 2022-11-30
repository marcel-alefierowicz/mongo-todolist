const express = require('express');
const router = express.Router();
const db = require('../models/Baza');

router.get('/', (req, res) => {
    let dane = ['aaa', 'aadadadad',Date.now(), 12-12-2023]
    let item = new db({
      title:dane[0],
      content:dane[1],
      created_at:dane[2],
      finished_at:dane[3]
    });
  
    item.save();
  })

module.exports = router;