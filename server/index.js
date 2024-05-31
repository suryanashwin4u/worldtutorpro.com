const { app, port } = require('./server');
const db = require('./database');

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});