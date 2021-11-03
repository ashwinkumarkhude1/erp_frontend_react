import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router";
import { getEmployeeDetails, updateEmployee } from "../../services/api";

const UpdateEmployee = () => {
  let location = useLocation();
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    age: "",
    experience: "",
    address: "",
    mobileNo: "",
    position: "",
    CEO: "",
    managingDirector: "",
    duHead: "",
    manager: "",
    teamLead: "",
    team: "",
  });
  const [response, setResponse] = useState();

  const getEmployee = async () => {
    let data = await getEmployeeDetails(location.state);
    setInputField(data);
  };

  useEffect(() => {
    getEmployee();
  }, []);

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = async (e) => {
    e.preventDefault(e);
    let data = await updateEmployee(inputField);
    setResponse(data);
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Update Employee Details</h4>
      <Form>
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            onChange={inputsHandler}
            value={inputField && inputField.firstName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your your email address"
            name="lastName"
            onChange={inputsHandler}
            value={inputField && inputField.lastName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            name="age"
            onChange={inputsHandler}
            value={inputField && inputField.age}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Experience:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your  work experience in years"
            name="experience"
            onChange={inputsHandler}
            value={inputField && inputField.experience}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="address"
            onChange={inputsHandler}
            value={inputField && inputField.address}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Mobile Number:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your mobile number"
            name="mobileNo"
            onChange={inputsHandler}
            value={inputField && inputField.mobileNo}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Team(Optional):</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter team"
            name="team"
            onChange={inputsHandler}
            value={inputField.team}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitButton}>
          Click here to submit form
        </Button>
        <div>Response:</div>
        <div>{response}</div>
      </Form>
    </div>
  );
};

export default UpdateEmployee;
