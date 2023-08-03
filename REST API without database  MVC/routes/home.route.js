const router = require('express').Router();
const homeController = require('../controllers/home.controllers');

router.get('/', homeController);

module.exports = router;