// src/pages/TutorStudentList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import '../styles/Common.css';
import '../styles/TutorStudentList.css';

const TutorStudentList = () => {
  const [listType, setListType] = useState('tutors');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the list based on the selected type
    const endpoint = listType === 'tutors' ? '/api/tutors-list' : '/api/students-list';
    axios.get(endpoint)
      .then(response => setData(response.data))
      .catch(error => console.error(`Error fetching ${listType}:`, error));
  }, [listType]);

  const handleToggle = (type) => {
    setListType(type);
  };

  return (
    <Container className="list-page">
      <Row className="justify-content-center my-4">
        <Col md="auto" className="text-center">
          <Button
            variant="outline-primary"
            className={`toggle-btn ${listType === 'tutors' ? 'active' : ''}`}
            onClick={() => handleToggle('tutors')}
          >
            Tutors List
          </Button>
          <Button
            variant="outline-primary"
            className={`toggle-btn ${listType === 'students' ? 'active' : ''} ml-2`}
            onClick={() => handleToggle('students')}
          >
            Students List
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover className="mt-4">
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
                {listType === 'tutors' ? (
                  <>
                    <th>Subjects</th>
                    <th>Classes</th>
                  </>
                ) : (
                  <>
                    <th>Parent's Name</th>
                    <th>Grade</th>
                    <th>Subjects</th>
                    <th>Contact</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  {listType === 'tutors' ? (
                    <>
                      <td>{item.subjects.join(', ')}</td>
                      <td>{item.classes.join(', ')}</td>
                    </>
                  ) : (
                    <>
                      <td>{item.parentName}</td>
                      <td>{item.grade}</td>
                      <td>{item.subjects.join(', ')}</td>
                      <td>{item.contact}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TutorStudentList;
