const express = require('express');
const TutorController = require('../controllers/TutorController');

const router = express.Router();

router.post('/tutor-registration', TutorController.tutorRegistration);

module.exports = router;