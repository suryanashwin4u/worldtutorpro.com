const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = 5001; // Change to a different port number

mongoose.connect('mongodb://localhost:27017/worldtutorpro')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error(err);
  });

app.get('/api/tutors-registration', (req, res) => {
  res.send('tutors registrations successfull');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});