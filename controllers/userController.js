const userModel = require('../models/userModel');

exports.getAllUser = async (req, res) => {
    try {
        const users = await userModel.getAllUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.getUserById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userModel.createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = await userModel.auth(email, password);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const newData = req.body;
        await userModel.updateUser(userId, newData);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await userModel.deleteUser(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};