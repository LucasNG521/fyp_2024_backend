const express = require('express');
const router = express.Router();
const { getAllAnimals, getAnimal, addAnimal, updateAnimal, deleteAnimal } = require('../controllers/animalController');

router.get('/', getAllAnimals);

router.get('/:id', getAnimal);

router.post('/', addAnimal);

router.put('/:id', updateAnimal);

router.delete('/:id', deleteAnimal);

module.exports = router;