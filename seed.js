// seed.js
const mongoose = require('mongoose');
require('dotenv').config(); // To load MONGO_URI from .env

const Amenity = require('./models/amenity.model');
const Location = require('./models/location.model');
const PG = require('./models/PG');

// Import your mock data
const amenitiesData = require('./data/amenities');
const locationsData = require('./data/locations');
const pgsData = require('./data/pgs');

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connected');

    // Clear existing data
    await Amenity.deleteMany({});
    await Location.deleteMany({});
    await PG.deleteMany({});

    console.log('Existing data cleared');

    // Insert amenities and get their IDs
    const insertedAmenities = await Amenity.insertMany(amenitiesData);
    console.log(`Amenities: ${insertedAmenities.length} inserted`);

    // Insert locations and get their IDs
    const insertedLocations = await Location.insertMany(locationsData);
    console.log(`Locations: ${insertedLocations.length} inserted`);

    // Prepare PG data with amenity references
    const preparedPGs = pgsData.map(pg => {
      // Randomly assign 3-5 amenities to each PG
      const amenityCount = Math.floor(Math.random() * 3) + 3; // 3 to 5 amenities
      const selectedAmenities = [];
      
      for (let i = 0; i < amenityCount; i++) {
        const randomIndex = Math.floor(Math.random() * insertedAmenities.length);
        if (!selectedAmenities.includes(insertedAmenities[randomIndex]._id)) {
          selectedAmenities.push(insertedAmenities[randomIndex]._id);
        }
      }
      
      return {
        ...pg,
        amenities: selectedAmenities
      };
    });

    // Insert PGs with amenity references
    const insertedPGs = await PG.insertMany(preparedPGs);

    console.log('🎉 Data successfully inserted:');
    console.log(`Amenities: ${insertedAmenities.length}`);
    console.log(`Locations: ${insertedLocations.length}`);
    console.log(`PGs: ${insertedPGs.length}`);
  } catch (err) {
    console.error('❌ Error seeding database:', err);
  } finally {
    mongoose.connection.close();
    console.log('Database connection closed');
  }
};

seedDB();