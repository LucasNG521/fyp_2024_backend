const express = require('express');
const router = express.Router();
const { getAllHLS, getHLS, getAnimalHLS, addHLS, updateHLS, deleteHLS } = require('../controllers/animalHLSController');

router.get('/', getAllHLS);

router.get('/:id', getHLS);
router.get('/animal/:id', getAnimalHLS);

router.post('/', addHLS);

router.put('/:id', updateHLS);

router.delete('/:id', deleteHLS);

module.exports = router;