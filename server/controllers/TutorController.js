const tutorModel = require('../models/TutorModel');
const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to file name
  }
});
const upload = multer({ storage: storage });

//function for storing and returning tutor data
const tutorRegistration = async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Uploaded files:', req.files);

  const {
    name, gender, address, city, state, pinCode, preferredCityAreas, phoneNumber, whatsappNumber, emailId,
    language, teachingExperience, education, university, subjects, classes, classMode, description
  } = req.body;

  const photo = req.files['photo'] ? req.files['photo'][0].path : '';
  const idProofFile = req.files['idProofFile'] ? req.files['idProofFile'][0].path : '';
  const educationProof = req.files['educationProof'] ? req.files['educationProof'][0].path : '';

  const tutorData = new TutorRegistrationData({
    name, gender, address, city, state, pinCode, preferredCityAreas, phoneNumber, whatsappNumber, emailId,
    language, teachingExperience, education, university, subjects, classes, classMode, description,
    photo, idProofFile, educationProof
  });

  try {
    const newTutor = await tutorData.save();
    console.log('Saved tutor data:', newTutor);
    res.status(201).json(newTutor);
  } catch (err) {
    console.error('Error saving tutor data:', err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  upload,
  tutorRegistration,
};