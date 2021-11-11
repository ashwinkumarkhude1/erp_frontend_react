import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Dropdown, Modal } from "react-bootstrap";
import {
  addEmployee,
  getEmployeeOfPosition,
  getTeamList,
} from "../../services/api";
import "react-phone-number-input/style.css";
import InputMask from "react-input-mask";

const AddEmployee = () => {
  const [showPopUP, setShowPopUp] = useState(false);
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    age: "",
    experience: "",
    address: "",
    mobileNo: "",
    position: "",
    duHead: "",
    manager: "",
    teamLead: "",
    team: "",
  });
  const uiHierarchy = ["DUHead", "Manager", "TL"];
  const keyHierarchy = ["duHead", "manager", "teamLead"];
  const [higherUps, setHigherUps] = useState();
  const [teams, setTeams] = useState([]);

  const [hierarchy, setHierarchy] = useState([]);
  const [response, setResponse] = useState();

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
    if (e.target.name == "position") updateHigherUpToBeShown(e.target.value);
  };

  const getHigherUp = async () => {
    let data = await getEmployeeOfPosition();
    setHigherUps(data);
  };

  useEffect(() => {
    getHigherUp();
    getTeams();
  }, []);

  const updateHigherUpToBeShown = (pos) => {
    if (pos === "Manager") setHierarchy(["duHead"]);
    else if (pos === "TL") setHierarchy(["manager"]);
    else if (pos === "SDE") setHierarchy(["teamLead"]);
    else setHierarchy([]);
    getHigherUp();
  };

  const removeHierarchy = (pos) => {
    let array = [...keyHierarchy];
    let index;
    if (pos == "CEO" || pos == "MD") {
      index = 0;
    } else index = uiHierarchy.indexOf(pos);
    if (index !== -1) {
      array.splice(index, 3);
    }
    pos == "" ? setHierarchy([]) : setHierarchy(array);
    console.log("After");
    console.log(inputField);
    getHigherUp();
  };

  const submitButton = async (e) => {
    e.preventDefault(e);
    let data = await addEmployee(inputField);
    setResponse(data);
    console.log(data);
    handleShowPopUp();
  };

  const handleClosePopUp = () => setShowPopUp(false);
  const handleShowPopUp = () => {
    setShowPopUp(true);
  };

  const getTeams = async () => {
    let data = await getTeamList();
    setTeams(data);
  };

  const PhoneInput = (props) => {
    return (
      <InputMask
        mask="(+1) 999 999 9999"
        value={props.value}
        onChange={props.onChange}
      ></InputMask>
    );
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Add Employee Details</h4>
      <Form>
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            onChange={inputsHandler}
            value={inputField.firstName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your your email address"
            name="lastName"
            onChange={inputsHandler}
            value={inputField.lastName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            name="age"
            onChange={inputsHandler}
            value={inputField.age}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Experience:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your  work experience in years"
            name="experience"
            onChange={inputsHandler}
            value={inputField.experience}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="address"
            onChange={inputsHandler}
            value={inputField.address}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Mobile Number:</Form.Label>
          {/* <Form.Control
            type="text"
            placeholder="Enter your mobile number"
            name="mobileNo"
            onChange={inputsHandler}
            value={inputField.mobileNo}
          /> */}
          {/* <div>
          <label>Mobile No:</label>
          <PhoneInput
            international
            defaultCountry="IN"
            placeholder="Enter your mobile number"
            name="mobileNo"
            onChange={inputsHandler}
            value={inputField.mobileNo}
          />
        </div> */}
          <div>
            <InputMask
              mask="999 999 9999"
              name="mobileNo"
              onChange={inputsHandler}
              value={inputField.mobileNo}
            ></InputMask>
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Position:</Form.Label>
          <div>
            <select
              name="position"
              onChange={inputsHandler}
              value={inputField.position}
            >
              <option value="">Select</option>
              <option value="CEO">CEO</option>
              <option value="MD">MD</option>
              <option value="DUHead">DU Head</option>
              <option value="Manager">Manager</option>
              <option value="TL">Team Lead</option>
              <option value="SDE">SDE</option>
            </select>
          </div>
        </Form.Group>

        {hierarchy.map((curElem) => {
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
        {/* <Form.Group>
          <Form.Label>Team(Optional):</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter team"
            name="team"
            onChange={inputsHandler}
            value={inputField.team}
          />
        </Form.Group> */}
        {
          <Form.Group>
            <Form.Label>Team:</Form.Label>
            <div>
              <select
                name="team"
                onChange={inputsHandler}
                value={inputField.team}
              >
                <option value="">Select</option>
                {teams &&
                  teams.map((team) => {
                    return (
                      <>
                        <option value={team.name}>{team.name}</option>
                      </>
                    );
                  })}
              </select>
            </div>
          </Form.Group>
        }

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
            {response && response.IncorrectFields && (
              <p>Incorrect Fields: {response.IncorrectFields}</p>
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

export default AddEmployee;
