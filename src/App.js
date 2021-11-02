import React, { useState, Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import EmployeeList from "./components/employee/employeeList";
import AddEmployee from "./components/employee/addEmployee";
import UpdateEmployee from "./components/employee/updateEmployee";
import Hierarchy from "./components/employee/hierarchy";
import AddTeam from "./components/team/addTeam";
import TeamList from "./components/team/teamList";
import UpdateTeam from "./components/team/updateTeam";
import Navbar from "./components/navbar";
import GoogleOauthlogin from "./components/googleOauthlogin";
import Employee from "./components/employee/employee";
import PrivateRoute from "./components/privateRoute";

const App = () => {
  let history = useHistory();
  let [authenticated, setAuthenticated] = useState(false);

  const childToParent = (childdata) => {
    alert("authintication :" + childdata);
    setAuthenticated(childdata);
  };

  const requireAuth = () => {
    alert("authintication :" + authenticated);
    if (!authenticated) {
      let path = "/";
      history.push(path);
    }
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
              onEnter={requireAuth}
            />
            <div>
              <Navbar />
              <PrivateRoute
                exact
                path={["/employeeList"]}
                component={EmployeeList}
                isLogin={authenticated}
              />
              <Route
                exact
                path="/addEmployee"
                component={AddEmployee}
                onEnter={requireAuth}
              />
              <Route
                exact
                path="/updateEmployee"
                component={UpdateEmployee}
                onEnter={requireAuth}
              />
              <Route
                exact
                path="/hierarchy"
                component={Hierarchy}
                onEnter={requireAuth}
              />
              <Route
                exact
                path="/addTeam"
                component={AddTeam}
                onEnter={requireAuth}
              />
              <Route
                exact
                path="/team"
                component={TeamList}
                onEnter={requireAuth}
              />
              <Route
                exact
                path="/updateTeam"
                component={UpdateTeam}
                onEnter={requireAuth}
              />
              <Route
                exact
                path="/employee"
                component={Employee}
                onEnter={requireAuth}
              />
            </div>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
