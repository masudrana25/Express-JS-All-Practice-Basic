let users = require('../models/users.models');
const { v4: uuidv4 } = require('uuid');

// get all users
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

// create new user
const userCreate = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.userName,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json({users});
};

// update a user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const {userName, email} = req.body;
 users.filter(user => user.id === userId).map(matchedUser => {
    matchedUser.userName = userName;
    matchedUser.email = email;
  });
  
  res.status(200).json({users});
};

// delete a user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter(user => user.id !== userId);
  res.status(200).json({users});
};

module.exports = {getAllUsers, userCreate,updateUser,deleteUser};