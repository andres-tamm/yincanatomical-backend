require('dotenv').config();
const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Backend Yincanatomical" });
});

module.exports = router;