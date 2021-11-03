import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router";
import { getTeamDetails, updateTeam } from "../../services/api";

const UpdateTeam = () => {
  let location = useLocation();
  const [inputField, setInputField] = useState({
    name: "",
    duHead: "",
    manager: "",
    teamLead: "",
    teamMember: "",
  });
  const [response, setResponse] = useState();

  const getTeam = async () => {
    let data = await getTeamDetails(location.state);
    setInputField(data);
  };

  useEffect(() => {
    getTeam();
  }, []);

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = async (e) => {
    e.preventDefault(e);
    let data;
    var array = JSON.parse("[" + inputField.teamMember + "]");
    inputField.teamMember = array;
    data = await updateTeam(inputField);
    setResponse(data);
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Update Team Details</h4>
      <Form>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="name"
            onChange={inputsHandler}
            value={inputField && inputField.name}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>DU Head</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your your email address"
            name="duHead"
            onChange={inputsHandler}
            value={inputField && inputField.duHead}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Manager:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your age"
            name="manager"
            onChange={inputsHandler}
            value={inputField && inputField.manager}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>TeamLead:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your  work experience in years"
            name="teamLead"
            onChange={inputsHandler}
            value={inputField && inputField.teamLead}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Team Member:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="teamMember"
            onChange={inputsHandler}
            value={inputField && inputField.teamMember}
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

export default UpdateTeam;
