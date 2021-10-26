import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddEmployee = () => {
    return (
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
        <h4>Add Employee Details</h4>
        <Form>
        <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" 
                            placeholder="Enter your first name" />
            </Form.Group>
            <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" 
                            placeholder="Enter your your email address" />
            </Form.Group>
            <Form.Group>
            <Form.Label>Age:</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Experience:</Form.Label>
            <Form.Control type="number" placeholder="Enter your  work experience in years" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Mobile Number:</Form.Label>
            <Form.Control type="text" placeholder="Enter your mobile number" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Position:</Form.Label>
            <Form.Control type="text" placeholder="Enter your position" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Click here to submit form
            </Button>
        </Form>
    </div>
    )
};

export default AddEmployee;
