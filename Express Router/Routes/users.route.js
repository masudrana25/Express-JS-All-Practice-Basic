const express = require('express');
const router = express.Router();


router.get('/contact', (req, res) => {
  res.send('Welcome to Contact page of my Server');
});
router.get('/register', (req, res) => {
  res.send('Welcome to Register page of my Server');
});
router.get('/login', (req, res) => {
  res.send('Welcome to Login page of my Server');
});

module.exports = router;