const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('./models/User');



const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


// MongoDB connection process.env.MONGO_URI
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ////////////////////////////////////////////////////////////////////////












//  CREATING A PASSWORD TO ADD TO THE DATABASE 
// Replace 'yourPassword' with the actual password you want to hash
const plainPassword = 'Password1!';

// Generate a salt and hash the password
bcrypt.genSalt(10, (err, salt) => {
  if (err) {
    console.error('Error generating salt:', err);
    return;
  }

  bcrypt.hash(plainPassword, salt, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return;
    }

    console.log('Plain Password:', plainPassword);
    console.log('Bcrypt Hash:', hash);
  });
});
