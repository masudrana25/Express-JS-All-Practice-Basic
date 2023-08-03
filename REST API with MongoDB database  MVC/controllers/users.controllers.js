const {v4 :uuidv4} = require('uuid');
const User = require('../modules/users.modules');

const getAllUsers = async (req, res) => {
 try {
   const users = await User.find();
   res.status(200).json(users);
 } catch (error) {
  res.status(500).send(error.message);
 }
};

//get one user

const getOneUser = async(req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//create user

const createUsers = async (req, res) => {
  try {
    const newUser = new User({
    id: uuidv4(),
    name: req.body.name,
    age: req.body.age,
  })
  await newUser.save();
  res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//update user 

const updateUsers = async (req, res) => {
   try {
     const user = await User.findOne({ id: req.params.id });
     user.name = req.body.name;
     user.age = Number(req.body.age);
     await user.save();
     res.status(200).json(user);
  } catch (error) {
     res.status(500).send(error.message);
  }
};

// delete one user 

const deleteUsers = async (req, res) => {
  try {
   await User.deleteOne({ id: req.params.id });
    res.status(200).json({message : ' user deleted successfully. '});
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = { getAllUsers , getOneUser,deleteUsers,updateUsers,createUsers};