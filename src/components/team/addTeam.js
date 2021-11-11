import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Dropdown, Modal } from "react-bootstrap";
import { addTeam, getEmployeeOfPosition } from "../../services/api";
const AddTeam = () => {
  const [showPopUP, setShowPopUp] = useState(false);
  const [inputField, setInputField] = useState({
    name: "",
    duHead: "",
    manager: "",
    teamLead: "",
    teamMember: "",
  });

  const [hierarchy, setHierarchy] = useState([
    "duHead",
    "manager",
    "teamLead",
    "teamMember",
  ]);
  const [response, setResponse] = useState();
  const [higherUps, setHigherUps] = useState();
  const [teamMemberRowNos, setTeamMemberRowNos] = useState(0);

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
    console.log(inputField);
  };

  const getHigherUp = async () => {
    let data = await getEmployeeOfPosition();
    setHigherUps(data);
  };

  useEffect(() => {
    getHigherUp();
  }, []);

  const submitButton = async (e) => {
    e.preventDefault(e);
    let data;
    let array = JSON.parse("[" + inputField.teamMember + "]");
    inputField.teamMember = array;
    data = await addTeam(inputField);
    setResponse(data);
    console.log(data);
    handleShowPopUp();
  };

  const setRowNo = () => {
    setTeamMemberRowNos(teamMemberRowNos + 1);
  };

  const handleClosePopUp = () => setShowPopUp(false);
  const handleShowPopUp = () => {
    setShowPopUp(true);
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

        {/* <Form.Group>
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
        </Form.Group> */}

        {higherUps &&
          hierarchy.map((curElem) => {
            return (
              <>
                <Form.Group>
                  <Form.Label>{curElem}:</Form.Label>
                  <div>
                    <select
                      name={curElem}
                      onChange={inputsHandler}
                      value={inputField[{ curElem }]}
                    >
                      <option value="">Select</option>
                      {higherUps[curElem] &&
                        higherUps[curElem].map((emp) => {
                          return (
                            <>
                              <option value={emp.id}>
                                {emp.firstName + " " + emp.lastName}
                              </option>
                            </>
                          );
                        })}
                    </select>
                  </div>
                </Form.Group>
              </>
            );
          })}
        {/* 
        <Form.Group>
          <Form.Label>Team Members:</Form.Label>
          <div>
            <select
              name="teamMembers"
              onChange={inputsHandler}
              value={inputField.teamMembers}
            >
              <option value="">Select</option>
              {higherUps &&
                higherUps.teamMembers.map((emp) => {
                  return (
                    <>
                      <option value={emp.id}>
                        {emp.firstName + " " + emp.lastName}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>
        </Form.Group> */}
        <Button variant="primary" type="submit" onClick={submitButton}>
          Submit
        </Button>
        <Modal show={showPopUP} onHide={handleClosePopUp}>
          <Modal.Header closeButton>
            <Modal.Title>{response && response.status}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-break">
            {response && response.MissingFields && (
              <p>Missing Fields: {response.MissingFields}</p>
            )}
            {response && response.message && <p>{response.message}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClosePopUp}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
};

export default AddTeam;
