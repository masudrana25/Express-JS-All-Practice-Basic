const router = require('express').Router();
const notFoundController = require('../controllers/notFound.controllers');

router.get(notFoundController);

module.exports = router;