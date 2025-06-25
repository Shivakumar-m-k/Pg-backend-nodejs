const express = require('express');
const router = express.Router();
const Amenity = require('../models/amenity.model');

// Get all amenities
router.get('/', async (req, res) => {
  try {
    const amenities = await Amenity.find();
    res.json(amenities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;