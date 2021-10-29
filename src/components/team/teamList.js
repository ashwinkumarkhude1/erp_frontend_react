import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";

const TeamList = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [menuData, setMenuData] = useState(null);

  const getTeam = async () => {
    let res = await fetch("http://localhost:3000/team/get");
    let data = await res.json();
    setMenuData(data);
    console.log(menuData);
  };
  const [deleteEmployee, setDeleteEmplyee] = useState([]);

  useEffect(() => {
    getTeam();
  }, []);

  const routeChange = (e) => {
    let path = "./updateTeam";
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
      "http://localhost:3000/team/deleteTeam",
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
      <h3>Team list</h3>
      <Table striped bordered hover varient="dark" size="sm">
        <thead>
          <tr>
            {/* <th width="40">Id</th> */}
            <th width="170">Team Name</th>
            <th width="170">DU Head</th>
            <th width="170">Manager</th>
            <th width="170">Team Lead</th>
            <th width="170">Members</th>
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
                const { id, name, duHead, manager, teamLead, teamMember } =
                  curElem;
                return (
                  <>
                    <tr>
                      {/* <th>{id}</th> */}
                      <th>{name}</th>
                      <th>{duHead}</th>
                      <th>{manager}</th>
                      <th>{teamLead}</th>
                      <th>{teamMember.toString()}</th>
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
                          value={id}
                          onClick={handleShow}
                        >
                          Delete
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Delete Team?</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>Do you want to delete Team?</Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={deleteButton}>
                              Delete Team
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

export default TeamList;
