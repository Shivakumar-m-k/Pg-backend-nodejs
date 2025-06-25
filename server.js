
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const pgRoutes = require('./routes/pgRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pgs', pgRoutes);
app.use('/api/auth', require('./routes/auth'));
app.use('/api/amenities', require('./routes/amenities'));
app.use('/api/bookings', require('./routes/booking'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
