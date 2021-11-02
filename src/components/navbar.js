import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/employeeList"} className="navbar-brand">
          ERP
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/employeeList"} className="nav-link">
              Employee List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addEmployee"} className="nav-link">
              Add Employee
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/hierarchy"} className="nav-link">
              Hierarchy
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addTeam"} className="nav-link">
              Add Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/team"} className="nav-link">
              Team List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/employee"} className="nav-link">
              EmployeeDetail
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
