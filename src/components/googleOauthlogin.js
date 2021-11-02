import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import { Form, Button } from "react-bootstrap";
const GoogleOauthlogin = ({ childToParent }) => {
  let history = useHistory();
  const routeChange = () => {
    childToParent(true);
    let path = "./employeeList";
    history.push(path);
  };

  const fail = () => {
    console.log("Authentication failed");
    childToParent(false);
  };
  return (
    <div>
      <GoogleLogin
        clientId="486878804553-c135jd2a0t80d2aoiodei075ihmq6s0j.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={routeChange}
        onFailure={fail}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleOauthlogin;
