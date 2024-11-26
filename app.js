const mongoose = require('mongoose');
require('dotenv').config(); // Load .env file

const { createAndSavePerson } = require('./controllers/personController');

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {serverSelectionTimeoutMS: 5000})
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Database connection error:', err));

// Call a controller function for testing
createAndSavePerson((err, data) => {
  if (err) console.error(err);
  else console.log('Person created:', data);
});
