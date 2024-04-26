const reportModel = require('../models/reportModel');

exports.getAllReport = async (req, res) => {
    try {
        const reports = await reportModel.getAllReport();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReport = async (req, res) => {
    try {
        const reportId = req.params.id;
        const report = await reportModel.getReport(reportId);
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getReportByUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const report = await reportModel.getReportByUserId(userId);
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addReport = async (req, res) => {
    try {
        const data = req.body;
        const newRepost = await reportModel.addReport(data);
        res.status(201).json(newRepost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateReport = async (req, res) => {
    try {
        const reportId = req.params.id;
        const newData = req.body;
        await reportModel.updateReport(reportId, newData);
        res.status(200).json({ message: 'report updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteReport = async (req, res) => {
    try {
        const reportId = req.params.id;
        await reportModel.deleteReport(reportId, {active: false});
        res.status(200).json({ message: 'report deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
