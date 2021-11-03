import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import { getTeamList, deleteTeam } from "../../services/api";

const TeamList = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [menuData, setMenuData] = useState(null);

  const getTeam = async () => {
    let data = await getTeamList();
    setMenuData(data);
  };
  const [deleteTeamId, setDeleteTeam] = useState([]);

  useEffect(() => {
    getTeam();
  }, []);

  const routeChange = (e) => {
    let path = "./updateTeam";
    history.push(path, e.target.value);
  };

  const deleteButton = async (e) => {
    e.preventDefault(e);
    await deleteTeam(deleteTeamId);
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setDeleteTeam(e.target.value);
  };

  return (
    <>
      <h3>Team list</h3>
      <Table striped bordered hover varient="dark" size="sm">
        <thead>
          <tr>
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
