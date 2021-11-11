import React, { useState, useEffect } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { useLocation } from "react-router";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { getEmployeeDetails } from "../../services/api";
import Table from "react-bootstrap/Table";

const Employee = () => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  let location = useLocation();

  const getEmployeeDetail = async () => {
    let data = await getEmployeeDetails(location.state.id);
    setEmployeeDetails(data);
  };

  useEffect(() => {
    getEmployeeDetail();
  }, []);

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
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
          <Table striped bordered hover varient="dark" size="sm">
            <thead>
              <tr>
                <th width="20"></th>
                <th width="200"></th>
              </tr>
            </thead>
            <tbody>
              {employeeDetails &&
                Object.entries(employeeDetails).map(([key, value]) => {
                  return (
                    // <>
                    //   <ListGroup.Item
                    //     as="li"
                    //     className="d-flex justify-content-between align-items-start"
                    //   >
                    //     <div className="ms-2 me-auto">
                    //       <div className="fw-bold">{key}</div>
                    //       {value}
                    //     </div>
                    //   </ListGroup.Item>
                    // </>
                    <tr>
                      <th>{key}</th>
                      <th>{value}</th>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
