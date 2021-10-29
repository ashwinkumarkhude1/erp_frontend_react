import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import EmployeeList from "./components/employee/employeeList";
import AddEmployee from "./components/employee/addEmployee";
import UpdateEmployee from "./components/employee/updateEmployee";
import Hierarchy from "./components/employee/hierarchy";
import AddTeam from "./components/team/addTeam";
import TeamList from "./components/team/teamList";
import UpdateTeam from "./components/team/updateTeam";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/employee"} className="navbar-brand">
            ERP
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/employee"} className="nav-link">
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
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/employee"]} component={EmployeeList} />
            <Route exact path="/addEmployee" component={AddEmployee} />
            <Route exact path="/updateEmployee" component={UpdateEmployee} />
            <Route exact path="/hierarchy" component={Hierarchy} />
            <Route exact path="/addTeam" component={AddTeam} />
            <Route exact path="/team" component={TeamList} />
            <Route exact path="/updateTeam" component={UpdateTeam} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
