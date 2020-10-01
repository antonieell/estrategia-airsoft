import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Sobre from "../Pages/Sobre";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre" component={Sobre} />
    </Switch>
  );
}
