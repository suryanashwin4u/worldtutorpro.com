import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack Project</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
