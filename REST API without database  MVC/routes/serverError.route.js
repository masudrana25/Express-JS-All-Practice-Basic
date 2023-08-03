const router = require('express').Router();
const serverErrorController = require('../controllers/serverError.controllers');

router.get( serverErrorController);

module.exports = router;