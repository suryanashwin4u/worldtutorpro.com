const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = 5001; // Change to a different port number

mongoose.connect('mongodb://localhost:27017/mernstack')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error(err);
  });

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});