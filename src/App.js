import React, { useState, Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import EmployeeList from "./components/employee/employeeList";
import AddEmployee from "./components/employee/addEmployee";
import UpdateEmployee from "./components/employee/updateEmployee";
import EmployeeHierarchy from "./components/employee/employeeHierarchy";
import AddTeam from "./components/team/addTeam";
import TeamList from "./components/team/teamList";
import UpdateTeam from "./components/team/updateTeam";
import Navbar from "./components/navbar/navbar";
import GoogleOauthlogin from "./services/googleOauthlogin";
import Employee from "./components/employee/employeeDetails";
import PrivateRoute from "./components/privateRoute/privateRoute";

const App = () => {
  let history = useHistory();
  let [authenticated, setAuthenticated] = useState(false);

  const childToParent = (childdata) => {
    setAuthenticated(childdata);
  };

  return (
    <BrowserRouter>
      <div>
        <div className="container mt-3">
          <Switch>
            <Route
              exact
              path={["/"]}
              component={(props) => (
                <GoogleOauthlogin childToParent={childToParent} />
              )}
            />
            <div>
              <Navbar />
              <PrivateRoute
                exact
                path={["/employeeList"]}
                component={EmployeeList}
                isLogin={authenticated}
              />
              <PrivateRoute
                exact
                path="/addEmployee"
                component={AddEmployee}
                isLogin={authenticated}
              />
              <PrivateRoute
                exact
                path="/updateEmployee"
                component={UpdateEmployee}
                isLogin={authenticated}
              />
              <PrivateRoute
                exact
                path="/employeeHierarchy"
                component={EmployeeHierarchy}
                isLogin={authenticated}
              />
              <PrivateRoute
                exact
                path="/addTeam"
                component={AddTeam}
                isLogin={authenticated}
              />
              <PrivateRoute
                exact
                path="/team"
                component={TeamList}
                isLogin={authenticated}
              />
              <PrivateRoute
                exact
                path="/updateTeam"
                component={UpdateTeam}
                isLogin={authenticated}
              />
              <PrivateRoute
                exact
                path="/employeeDetails"
                component={Employee}
                isLogin={authenticated}
              />
            </div>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
