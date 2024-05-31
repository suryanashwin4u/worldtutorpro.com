// src/pages/TutorsList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import '../styles/Common.css';
import '../styles/TutorsList.css';

const TutorsList = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    // Fetch the list of tutors from your API or database
    axios.get('/api/tutors-list')
      .then(response => setTutors(response.data))
      .catch(error => console.error('Error fetching tutors:', error));
  }, []);

  return (
    <div className=''>
      <Container>
          {/* <h1 className="text-center text-capitalize">Tutors List</h1> */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Phone/WhatsApp Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Subjects</th>
                <th>Classes</th>
              </tr>
            </thead>
            <tbody>
              {tutors.map(tutor => (
                <tr key={tutor.id}>
                  <td>{tutor.name}</td>
                  <td>{tutor.gender}</td>
                  <td>{tutor.phoneNumber}</td>
                  <td>{tutor.email}</td>
                  <td>{tutor.subjects.join(', ')}</td>
                  <td>{tutor.classes.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
      </Container>
    </div>
  );
};

export default TutorsList;
