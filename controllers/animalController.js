const animalModel = require('../models/animalModel');

exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await animalModel.getAllAnimal();
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAnimal = async (req, res) => {
    try {
        const animalId = req.params.id;
        // const animal = await animalModel.getAnimalById(animalId);
        const animal = await animalModel.getAnimalByIdWithHLS(animalId);
        res.status(200).json(animal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addAnimal = async (req, res) => {
    try {
        const data = req.body;
        const newAnimal = await animalModel.addAnimal(data);
        res.status(201).json(newAnimal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAnimal = async (req, res) => {
    try {
        const animalId = req.params.id;
        const newData = req.body;
        await animalModel.updateAnimal(animalId, newData);
        res.status(200).json({ message: 'animal updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAnimal = async (req, res) => {
    try {
        const animalId = req.params.id;
        await animalModel.deleteAnimal(animalId, {active: false});
        res.status(200).json({ message: 'animal deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
