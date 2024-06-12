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
import LoginRegister from './pages/LoginRegister';
import TutorStudentRegistration from './pages/TutorStudentRegistration';
import TutorsStudentsList from './pages/TutorsStudentsList';
import './styles/App.css';
import './styles/Common.css';

const App = () => {
    // const [message, setMessage] = useState(''); useEffect(() => {
    // axios.get('http://localhost:5001/')     .then(response =>
    // setMessage(response.data))     .catch(error => console.error('There was an
    // error!', error)); }, []);

    return (
        <div className='background-image'>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={< Home />}/>
                    <Route path="/tutor-student-registration" element={< TutorStudentRegistration />}/>
                    <Route path="/tutors-students-list" element={< TutorsStudentsList />}/>
                    <Route path="/free-classes" element={< FreeClasses />}/>
                    <Route path="/ask-answer" element={< AskAnswer />}/>
                    <Route path="/blogs" element={< Blogs />}/>
                    <Route path="/feedback" element={< Feedback />}/>
                    <Route path="/donate-us" element={< DonateUs />}/>
                    <Route path="/login-register" element={< LoginRegister />}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;