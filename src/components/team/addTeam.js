import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";
import { addTeam } from "../../services/api";
const AddTeam = () => {
  const [inputField, setInputField] = useState({
    name: "",
    duHead: "",
    manager: "",
    teamLead: "",
    teamMember: "",
  });

  const [response, setResponse] = useState();

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
    console.log(inputField);
  };

  const submitButton = async (e) => {
    e.preventDefault(e);
    let data;
    let array = JSON.parse("[" + inputField.teamMember + "]");
    inputField.teamMember = array;
    data = await addTeam(inputField);
    setResponse(data);
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Add Employee Details</h4>
      <Form>
        <Form.Group>
          <Form.Label>Team Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="name"
            onChange={inputsHandler}
            value={inputField.name}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>DU Head:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter DU Head ID"
            name="duHead"
            onChange={inputsHandler}
            value={inputField.duHead}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Manager:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Manager ID"
            name="manager"
            onChange={inputsHandler}
            value={inputField.manager}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Team Lead:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Team Lead ID"
            name="teamLead"
            onChange={inputsHandler}
            value={inputField.teamLead}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Team Members:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Team Members ID's"
            name="teamMember"
            onChange={inputsHandler}
            value={inputField.teamMember}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitButton}>
          Submit
        </Button>
        <div>{response && response}</div>
      </Form>
    </div>
  );
};

export default AddTeam;
