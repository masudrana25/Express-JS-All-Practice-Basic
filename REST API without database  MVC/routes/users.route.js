const router = require('express').Router();
const {getAllUsers, userCreate, updateUser,deleteUser} = require('../controllers/user.controllers');

router.get('/users', getAllUsers);
router.post('/users', userCreate);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;