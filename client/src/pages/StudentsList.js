// src/pages/StudentsList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import '../styles/Common.css';
import '../styles/StudentsList.css';

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the list of students from your API or database
    axios.get('/api/students-list')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className='background-container'>
    <Container>
      <h1 className="mb-4 text-center text-capitalize">Students List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Student Name</th>
            <th>Parent's Name</th>
            <th>Gender</th>
            <th>Phone/WhatsApp Number</th>
            <th>Email Id</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Classes</th>
            <th>Subjects</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.sno}</td>
              <td>{student.studentName}</td>
              <td>{student.parentName}</td>
              <td>{student.gender}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.city}</td>
              <td>{student.state}</td>
              <td>{student.classes.join(', ')}</td>
              <td>{student.subjects.join(', ')}</td>
              <td>{student.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </div>
  );
};

export default StudentsList;
