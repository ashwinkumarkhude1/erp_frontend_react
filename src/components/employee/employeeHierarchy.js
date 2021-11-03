import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { getEmployeeHigherHierarchy } from "../../services/api";
const EmployeeHierarchy = () => {
  const [id, setId] = useState([]);
  const [hierarchy, setHierarchy] = useState([]);

  const getEmployeeHierarchy = async (e) => {
    e.preventDefault(e);
    let data = await getEmployeeHigherHierarchy(id);
    setHierarchy(data);
  };

  const inputsHandler = (e) => {
    setId(e.target.value);
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>View Higher Hierarchy</h4>
      <Form>
        <Form.Group>
          <Form.Label>Employee ID:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your employee id"
            onChange={inputsHandler}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={getEmployeeHierarchy}>
          Submit
        </Button>
      </Form>
      {hierarchy &&
        Object.entries(hierarchy).map(([key, value]) => {
          return (
            <>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{key}</div>
                  <Link
                    to={{
                      pathname: "./employeeDetails",
                      state: { id: value.id },
                    }}
                  >
                    {value.firstName + " " + value.lastName}
                  </Link>
                </div>
              </ListGroup.Item>
            </>
          );
        })}
    </div>
  );
};

export default EmployeeHierarchy;
