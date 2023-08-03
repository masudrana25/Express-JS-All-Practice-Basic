const express = require('express');
const { CheckLoginValidation } = require('../validation/CheckLoginValidation');
const { runValidation } = require('../validation/runValidation');
const LoginCollection = require('../collections/login.collection');
const loginRouter = express.Router();



loginRouter.post(
  '/api/login',
  CheckLoginValidation,
  runValidation,
  LoginCollection
  );

module.exports = loginRouter;