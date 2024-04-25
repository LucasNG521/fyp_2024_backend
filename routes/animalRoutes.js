const express = require('express');
const router = express.Router();
const { getAllAnimals, getAnimal, addUser, updateUser, deleteUser } = require('../controllers/animalController');

router.get('/', getAllAnimals);

router.get('/:id', getAnimal);

// router.post('/', addUser);

// router.put('/:id', updateUser);

// router.delete('/:id', deleteUser);

module.exports = router;