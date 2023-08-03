const express = require('express');
const registrationRouter = express.Router();
const RegistrationCollection = require('../collections/registration.collections');
const { CheckRegistrationValidation } = require('../validation/CheckRegistrationValidation');
const { runValidation } = require('../validation/runValidation');



registrationRouter.post(
  '/api/register',
  CheckRegistrationValidation,
  runValidation,
  RegistrationCollection
  );

// export default registrationRouter;
module.exports = registrationRouter;