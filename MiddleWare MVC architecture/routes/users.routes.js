const express = require('express');
const { getUser, saveUser } = require('../controllers/user.controllers');
const router = express.Router();



router.get('/user', getUser);
router.post('/user', saveUser);

module.exports = router;