const cameraModel = require('../models/cameraModel');

exports.getAllCamera = async (req, res) => {
    try {
        const cameras = await cameraModel.getAllCamera();
        res.status(200).json(cameras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCamera = async (req, res) => {
    try {
        const cameraId = req.params.id;
        const camera = await cameraModel.getCameraById(cameraId);
        res.status(200).json(camera);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addCamera = async (req, res) => {
    try {
        const data = req.body;
        const newCamera = await cameraModel.addCamera(data);
        res.status(201).json(newCamera);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCamera = async (req, res) => {
    try {
        const cameraId = req.params.id;
        const newData = req.body;
        await cameraModel.updateCamera(cameraId, newData);
        res.status(200).json({ message: 'camera updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCamera = async (req, res) => {
    try {
        const cameraId = req.params.id;
        await cameraModel.deleteCamera(cameraId, {active: false});
        res.status(200).json({ message: 'camera deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
