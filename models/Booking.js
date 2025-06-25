const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pg: { type: mongoose.Schema.Types.ObjectId, ref: 'PG' },
  date: String,
  time: String,
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Booking', bookingSchema);
