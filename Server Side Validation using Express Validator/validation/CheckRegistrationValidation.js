const { check } = require('express-validator');

exports.CheckRegistrationValidation = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage('Name is Required.')
    .isLength({ min: 5 })
    .withMessage('Name is must be at least 5 characters.')
    .isLength({ max: 31 })
    .withMessage('Name is can be maximum 31 characters.'),
  check("email")
    .trim()
    .notEmpty()
    .withMessage('Email is Required.')
    .isEmail()
    .withMessage('Invalid Email Address. '),
   check("password")
    .trim()
    .notEmpty()
    .withMessage('Password is Required.')
    .isLength({ min: 5 })
    .withMessage('Password is must be at least 5 characters.')
    .isLength({ max: 31 })
    .withMessage('Password is can be maximum 31 characters.'),
   check("dob")
    .trim()
    .notEmpty()
    .withMessage('Date of Birth is Required.')
     .isISO8601()
     .toDate()
    .withMessage('Invalid Date of Birth. ')
]