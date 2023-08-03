const { validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  //error asly error dekhaby
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorsList = errors.array().map((error) => error.msg);
     return res.status(422).json({ errors: errorsList });
  };
  // error na asly next er kaj ta korbey
  next();
};