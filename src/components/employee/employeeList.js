import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";

const EmployeeList = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [menuData, setMenuData] = useState(null);
  const getEmployee = async () => {
    let res = await fetch("http://localhost:3000/employee/get");
    let data = await res.json();
    setMenuData(data);
  };
  const [deleteEmployee, setDeleteEmplyee] = useState([]);

  useEffect(() => {
    getEmployee();
  }, []);

  const routeChange = (e) => {
    let path = "./updateEmployee";
    history.push(path, e.target.value);
  };

  const deleteButton = async (e) => {
    e.preventDefault(e);
    console.log("id:" + deleteEmployee);
    let data;
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: deleteEmployee }),
    };

    const response = await fetch(
      "http://localhost:3000/employee/deleteEmployee",
      requestOptions
    );
    try {
      data = await response.json();
      // setResponse(data.message);
    } catch {
      console.log("error");
    }
    console.log("response");
    console.log(data);
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setDeleteEmplyee(e.target.value);
    console.log("Id for deleteing");
    console.log(e.target.value);
  };

  return (
    <>
      <h3>Employee list</h3>
      <Table striped bordered hover varient="dark" size="sm">
        <thead>
          <tr>
            {/* <th width="40">Id</th> */}
            <th width="170">First Name</th>
            <th width="170">Last Name</th>
            <th width="170">Age</th>
            <th width="170">Experience</th>
            <th width="170">Address</th>
            <th width="170">MobileNo</th>
            <th width="170">Position</th>
            <th width="170">Operation</th>
            <th width="170">Operation</th>
          </tr>
        </thead>
        <tbody>
          {menuData &&
            menuData
              .sort(
                ({ id: previousID }, { id: currentID }) =>
                  previousID - currentID
              )
              .map((curElem) => {
                const {
                  id,
                  firstName,
                  lastName,
                  age,
                  experience,
                  address,
                  mobileNo,
                  position,
                  team,
                } = curElem;
                return (
                  <>
                    <tr>
                      {/* <th>{id}</th> */}
                      <th>{firstName}</th>
                      <th>{lastName}</th>
                      <th>{age}</th>
                      <th>{experience}</th>
                      <th>{address}</th>
                      <th>{mobileNo}</th>
                      <th>{position}</th>
                      <th>{team}</th>
                      <th>
                        <Button
                          variant="primary"
                          type="submit"
                          value={id}
                          onClick={routeChange}
                        >
                          Update
                        </Button>
                      </th>
                      <th>
                        <Button
                          variant="primary"
                          type="submit"
                          // value={{
                          //   id: id,
                          //   firstName: firstName,
                          //   lastName: lastName,
                          // }}
                          value={id}
                          onClick={handleShow}
                        >
                          Delete
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Delete Employee?</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Do you want to delete Employee?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={deleteButton}>
                              Delete Employee
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </th>
                    </tr>
                  </>
                );
              })}
        </tbody>
      </Table>
    </>
  );
};

export default EmployeeList;
