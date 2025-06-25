const mongoose = require('mongoose');

const amenitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String }, // optional: icon URL or name
});

const Amenity = mongoose.model('Amenity', amenitySchema);

module.exports = Amenity; 
