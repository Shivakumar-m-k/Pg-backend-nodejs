
const express = require('express');
const { getAllPGs, getPGById, createPG, updatePG, deletePG } = require('../controllers/pgController');
const router = express.Router();

router.get('/', getAllPGs);
router.get('/:id', getPGById);
router.post('/', createPG);
router.put('/:id', updatePG);
router.delete('/:id', deletePG);

module.exports = router;
