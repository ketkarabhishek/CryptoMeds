import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Prescriptions from "pages/Prescriptions";
import Allergies from "pages/Allergies";
import BaseWrapper from "./components/BaseWrapper";
import Conditions from "pages/Conditions";

const Router = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <BaseWrapper>
        <Route exact path="/dashboard">
          {/* {isLoggedIn ? <Dashboard/> : <Redirect to="/"/>} */}
          <Dashboard />
        </Route>
        <Route exact path="/prescriptions">
          {/* {isLoggedIn ? <Reports/> : <Redirect to="/"/>} */}
          <Prescriptions />
        </Route>
        <Route exact path="/reports">
          {/* {isLoggedIn ? <Reports/> : <Redirect to="/"/>} */}
          <Reports />
        </Route>
        <Route exact path="/allergies">
          {/* {isLoggedIn ? <Reports/> : <Redirect to="/"/>} */}
          <Allergies />
        </Route>
        <Route exact path="/conditions">
          {/* {isLoggedIn ? <Reports/> : <Redirect to="/"/>} */}
          <Conditions />
        </Route>
      </BaseWrapper>
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Router);
