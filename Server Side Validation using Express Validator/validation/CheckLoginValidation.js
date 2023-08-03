const { check } = require('express-validator');

exports.CheckLoginValidation = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage('Email is Required.')
    .isEmail()
    .withMessage('Invalid Email Address. ')
  ,
   check("password")
    .trim()
    .notEmpty()
    .withMessage('Password is Required.')
    .isLength({ min: 5 })
    .withMessage('Password is must be at least 5 characters.')
    .isLength({ max: 31 })
    .withMessage('Password is can be maximum 31 characters.')
 
]