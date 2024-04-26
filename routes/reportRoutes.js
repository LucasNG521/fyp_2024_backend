const express = require('express');
const router = express.Router();
const { getAllReport, getReport, addReport, updateReport, deleteReport } = require('../controllers/reportController');

router.get('/', getAllReport);

router.get('/:id', getReport);

router.post('/', addReport);

router.put('/:id', updateReport);

router.delete('/:id', deleteReport);

module.exports = router;