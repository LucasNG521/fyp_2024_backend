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
        const animal = await animalModel.getAnimalById(animalId);
        res.status(200).json(animal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// exports.addUser = async (req, res) => {
//     try {
//         const userData = req.body;
//         const newUser = await userModel.createUser(userData);
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// exports.updateUser = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const newData = req.body;
//         await userModel.updateUser(userId, newData);
//         res.status(200).json({ message: 'User updated successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// exports.deleteUser = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         await userModel.deleteUser(userId);
//         res.status(200).json({ message: 'User deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };