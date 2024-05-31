import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AskAnswer from './pages/AskAnswer';
import Blogs from './pages/Blogs';
import DonateUs from './pages/DonateUs';
import Feedback from './pages/FeedBack';
import FreeClasses from './pages/FreeClasses';
import Home from './pages/Home';
import Login from './pages/Login';
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
        <Route path="/free-classes" element={<FreeClasses/>} />
        <Route path="/ask-answer" element={<AskAnswer/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/donate-us" element={<DonateUs/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;