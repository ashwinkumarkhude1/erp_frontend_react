import React, { useState, useEffect } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { useLocation } from "react-router";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Employee = () => {
  const [hierarchy, setHierarchy] = useState([]);
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [id, setId] = useState([]);
  let location = useLocation();
  const getEmployeeHigherHierarchy = async (e) => {
    e.preventDefault(e);
    let res = await fetch(
      "http://localhost:3000/employee/getEmployeeHigherHierarchy/9"
    );
    let data = await res.json();
    setHierarchy(data);
  };

  const getEmployeeDetails = async (e) => {
    console.log(location.state.id);
    // e.preventDefault(e);
    let res = await fetch(
      "http://localhost:3000/employee/get/" + location.state.id
    );
    let data = await res.json();
    setEmployeeDetails(data);
  };

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };
  return (
    <div>
      <div className="mb5">
        <button onClick={printDocument}>Print</button>
      </div>
      <div id="divToPrint">
        <div>
          <h1>Employee Detail Page</h1>
          {hierarchy &&
            Object.entries(employeeDetails).map(([key, value]) => {
              return (
                <>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{key}</div>
                      {value}
                    </div>
                  </ListGroup.Item>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Employee;
