import React from "react";
import { Switch /*, Route*/ } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SingUp";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Route from "./Route"; //Nosso componenet Route substitui react-router-dom assim temos nossa rota privada
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
