const animalHLSModel = require('../models/animalHLSModel');

exports.getAllHLS = async (req, res) => {
    try {
        const HLS = await animalHLSModel.getAllHLS();
        res.status(200).json(HLS);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getHLS = async (req, res) => {
    try {
        const HLSId = req.params.id;
        const HLS = await animalHLSModel.getHLSById(HLSId);
        res.status(200).json(HLS);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAnimalHLS = async (req, res) => {
    try {
        const animalId = req.params.id;
        const HLS = await animalHLSModel.getHLSByAnimalId(animalId);
        res.status(200).json(HLS);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addHLS = async (req, res) => {
    try {
        const data = req.body;
        const newHLS = await animalHLSModel.addHLS(data);
        res.status(201).json(newHLS);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateHLS = async (req, res) => {
    try {
        const HLSId = req.params.id;
        const newData = req.body;
        await animalHLSModel.updateHLS(HLSId, newData);
        res.status(200).json({ message: 'HLS updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteHLS = async (req, res) => {
    try {
        const HLSId = req.params.id;
        await animalHLSModel.deleteHLS(HLSId, {active: false});
        res.status(200).json({ message: 'HLS deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
