const express = require('express');
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');
const router = express.Router();

// Create booking
router.post('/', auth, async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Booking creation failed' });
  }
});

// Get all user's bookings
router.get('/my', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('pg');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

//Get user booking by id
router.get("/:id",auth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('pg');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

//update booking by id
router.put("/:id",auth,async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

//delete user booking id 
router.delete("/:id", auth, async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
