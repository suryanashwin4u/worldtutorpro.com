import React from 'react';
import InfiniteScrollComponent from '../components/InfiniteScrollComponent';
import '../styles/Common.css';

const App = () => {
  return (
    <div className="text-dark">
      <h1>Blog Page</h1>
      <InfiniteScrollComponent />
    </div>
  );
};

export default App;