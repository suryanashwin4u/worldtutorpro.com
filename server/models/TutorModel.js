const mongoose = require('mongoose');

//tutor registration form schema for database
const tutorSchema = new mongoose.Schema({
  name: String,
  gender: String,
  address: String,
  city: String,
  state: String,
  pinCode: String,
  preferredCityAreas: String,
  phoneNumber: String,
  whatsappNumber: String,
  emailId: String,
  language: String,
  teachingExperience: String,
  education: String,
  university: String,
  subjects: String,
  classes: String,
  classMode: String,
  description: String,
  photo: String, // Store the path to the uploaded photo
  idProofFile: String, // Store the path to the uploaded ID proof file
  educationProof: String, // Store the path to the uploaded education proof file
});

//tutorsData is the name of collection
const TutorsData = mongoose.model('TutorsData', tutorSchema);

// Export all schemas
module.exports = {
  TutorsData
};