import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { getEmployeeHigherHierarchy } from "../../services/api";
import Table from "react-bootstrap/Table";
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
          <Form.Label>Employee ID/Name:</Form.Label>
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
      <h3>Employee Hierarachy</h3>
      <Table striped bordered hover varient="dark" size="sm">
        <thead>
          <tr>
            <th width="40">Position</th>
            <th width="200">Name</th>
          </tr>
        </thead>
        <tbody>
          {hierarchy &&
            Object.entries(hierarchy).map(([key, value]) => {
              return (
                <>
                  {/* <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {key}:
                    <Link
                      to={{
                        pathname: "./employeeDetails",
                        state: { id: value.id },
                      }}
                    >
                      {value.firstName + " " + value.lastName}
                    </Link>
                  </div>
                </div>
              </ListGroup.Item> */}
                  <tr>
                    <th>{key}</th>
                    <th>
                      <Link
                        to={{
                          pathname: "./employeeDetails",
                          state: { id: value.id },
                        }}
                      >
                        {value.firstName + " " + value.lastName}
                      </Link>
                    </th>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeHierarchy;
