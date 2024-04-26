const express = require('express');
const router = express.Router();
const { getAllReport, getReport, getReportByUser, addReport, updateReport, deleteReport } = require('../controllers/reportController');

router.get('/', getAllReport);

router.get('/:id', getReport);
router.get('/user/:id', getReportByUser);

router.post('/', addReport);

router.put('/:id', updateReport);

router.delete('/:id', deleteReport);

module.exports = router;