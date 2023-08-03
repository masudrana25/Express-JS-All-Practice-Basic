const { models } = require('mongoose');
const { getAllUsers, createUsers, getOneUser, deleteUsers, updateUsers } = require('../controllers/users.controllers');

const router = require('express').Router();

router.post('/api/users', createUsers);
router.get('/api/users', getAllUsers);
router.get('/api/users/:id', getOneUser);
router.delete('/api/users/:id', deleteUsers);
router.patch('/api/users/:id', updateUsers);


module.exports = router;