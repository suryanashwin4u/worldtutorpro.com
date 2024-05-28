import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import DonateUs from './pages/DonateUs';
import Feedback from './pages/FeedBack';
import Home from './pages/Home';
import StudentRegistration from './pages/StudentRegistration';
import StudentsList from './pages/StudentsList';
import TutorRegistration from './pages/TutorRegistration';
import TutorsList from './pages/TutorsList';
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
        <Route path="/" element={<Home/>} />
        <Route path="/tutor-registration" element={<TutorRegistration/>} />
        <Route path="/student-registration" element={<StudentRegistration/>} />
        <Route path="/tutors-list" element={<TutorsList/>} />
        <Route path="/students-list" element={<StudentsList/>} />
        <Route path="/donate-us" element={<DonateUs/>} />
        <Route path="/feedback" element={<Feedback/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
