import React from "react";
import { Switch, Route } from "react-router-dom";
import WoWApp from "./WoWApp";
import Register from "./Register";
import Page404 from "./WoWApp/common/404";

const AppRoutes = () =>
  <div className="container">
    <Switch>
      <Route name="home" exact path="/" component={WoWApp} />
      <Route name="register" exact path="/Register" component={Register} />
      <Route path="*" component={Page404} />
    </Switch>
  </div>;

export default AppRoutes;
