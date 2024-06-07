const express = require('express');
const TutorController = require('../controllers/TutorController');

const router = express.Router();

router.get('/tutors', TutorController.getAllTutors);
router.post('/tutor-registration', TutorController.tutorRegistration);

module.exports = router;