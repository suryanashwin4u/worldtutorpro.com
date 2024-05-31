const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const tutorRoutes = require('./routes/TutorRoutes');

const app = express();
const port = process.env.PORT || 5001;

// Middleware in nodemodules
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use('/uploads', express.static('uploads')); // Serve files in the uploads directory

// Routes
app.use('/api', tutorRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res
        .status(500)
        .send('Something broke!');
});

module.exports = {
    app,
    port
};