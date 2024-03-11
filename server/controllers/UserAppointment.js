const mongoose = require('mongoose');

// Define the Department schema
const departmentSchema = new mongoose.Schema({
  details: String,
  // other department fields
});

// Define the User schema
const userSchema = new mongoose.Schema({
  username: String,
  // other user fields
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }, // Reference to the Department model
});

// Create models
const Department = mongoose.model('Department', departmentSchema);
const User = mongoose.model('User', userSchema);

// Example usage
async function getUserWithDepartment(userId) {
  try {
    const user = await User.findById(userId).populate('departmentId');
    console.log(user);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Assuming userId is the ObjectId of a user document
getUserWithDepartment('user_id_1');
