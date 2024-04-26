const express = require('express');
const router = express.Router();
const { getAllCamera, getCamera, addCamera, updateCamera, deleteCamera } = require('../controllers/cameraController');

router.get('/', getAllCamera);

router.get('/:id', getCamera);

router.post('/', addCamera);

router.put('/:id', updateCamera);

router.delete('/:id', deleteCamera);

module.exports = router;