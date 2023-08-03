const usersArray = require('../models/users.model');
const path = require('path');

exports.getUser = (req, res) => {
  res.sendFile(path.join(__dirname+'/../views/index.html'));
};

exports.saveUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = { name, age };
  usersArray.push(user);
  // res.send(usersArray);
  res.status(201).json({
    success: true,
    usersArray,
  })
};