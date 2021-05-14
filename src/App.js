import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";

import Imports from "./pages/Imports";
import Scans from "./pages/Scans";
import Revenue from "./pages/Revenue";
import Budget from "./pages/Budget";
import Registry from "./pages/Registry";
import Salary from "./pages/Salary";
import Settings from "./pages/Settings";
import Signals from "./pages/Signals";
import Coworkers from "./pages/Coworkers";
import Fade  from '@material-ui/core/Fade';

import $ from "jquery";

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
                <Login />
                </Route>
                <PrivateRoute path="/home" component={Dashboard} />
                <PrivateRoute path="/scans" component={Scans} />
                <PrivateRoute path="/imports" component={Imports} />
                <PrivateRoute path="/revenue" component={Revenue} />
                <PrivateRoute path="/coworkers" component={Coworkers} />
                <PrivateRoute path="/budget" component={Budget} />
                <PrivateRoute path="/registry" component={Registry} />
                <PrivateRoute path="/salary" component={Salary} />
                <PrivateRoute path="/settings" component={Settings} />
                <Route path="/signals">
                  <Nav />
                  <Signals />
                </Route>
              </Switch>
         </Router>
    </div >
  );
}

export default App;
