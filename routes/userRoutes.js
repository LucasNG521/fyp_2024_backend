const express = require('express');
const router = express.Router();
const { getAllUser, getUser, addUser, loginUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/', getAllUser);

router.get('/:id', getUser);

router.post('/', addUser);
router.post('/login', loginUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;