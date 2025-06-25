const mongoose = require('mongoose');


 const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true }, // URL or base64 string
  date: { type: Date, required: true },
  comment: { type: String, required: true },
});

const roomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  roomOverview: { type: String, required: true },
  amenities: [{ type: String, required: true }],
  price: {
    monthly: { type: Number, required: true },
    daily: { type: Number, required: true },
  },
  sharingType: { type: String, required: true },
  availableBeds: { type: Number, required: true },
});

const contactInfoSchema = new mongoose.Schema({
  managerName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
});

const pgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: [reviewSchema], default: [] },
  startingPrice: {
    monthly: { type: Number, required: true },
    daily: { type: Number, required: true },
  },
  images: [{ type: String, required: true }],
  rooms: { type: [roomSchema], required: true },
  amenities: [{ type: String, required: true }],
  houseRules: [{ type: String, required: true }],
  propertyType: { type: String, required: true },
  securityDeposit: { type: Number, required: true },
  propertyOverview: { type: String, required: true },
  contactInfo: { type: contactInfoSchema, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PG', pgSchema);
