import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HelloWorld from "../Components/Hello";
import Home from "../Pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
