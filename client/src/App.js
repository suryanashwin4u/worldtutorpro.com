import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import StudentRegistration from './pages/StudentRegistration';
import TutorRegistration from './pages/TutorRegistration';
import './styles/App.css';

const App = () => {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios.get('http://localhost:5001/')
  //     .then(response => setMessage(response.data))
  //     .catch(error => console.error('There was an error!', error));
  // }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tutor-registration" element={<TutorRegistration/>} />
        <Route path="/student-registration" element={<StudentRegistration/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
