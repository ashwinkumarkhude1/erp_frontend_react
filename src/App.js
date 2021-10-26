import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import EmployeeList from "./components/employeeList";
import AddEmployee from "./components/addEmployee";

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <BrowserRouter>
        <Link to={"/employee"} className="navbar-brand">
          ERP
        </Link>
        </BrowserRouter>
        <div className="navbar-nav mr-auto">
            <li className="nav-item">
            <BrowserRouter>
              <Link to={"/employee"} className="nav-link">
                Employee
              </Link>
            </BrowserRouter>
            </li>
            <li className="nav-item">
            <BrowserRouter>
              <Link to={"/addEmployee"} className="nav-link">
                Add
              </Link>
              </BrowserRouter>
            </li>
          </div>
        </nav>
     

        <div className="container mt-3">
          <BrowserRouter>
          <Switch>
            <Route exact path={["/", "/employee"]} component={EmployeeList} />
            <Route exact path="/addEmployee" component={AddEmployee} />
          </Switch>
          </BrowserRouter>
        </div>
      </div>
  );

}

export default App;
