import React from "react";
import { Redirect, Route } from "react-router-dom";
import Nav from "./Nav";

function PrivateRoute({ component: Component, ...rest }) {
  // Add your own authentication on the below line.
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);

  React.useEffect(() => {
    let req = fetch("http://127.0.0.1:8000/api/accounts/auth/validate", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [token]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn === null) {
          return <div></div>;
        }
        if (isLoggedIn === false)
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        else {
          return (
            <React.Fragment>
              <Nav />
              <Component />
            </React.Fragment>
          );
        }
      }}
    />
  );
}

export default PrivateRoute;
