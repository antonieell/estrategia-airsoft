import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HelloWorld from "../Components/Hello";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HelloWorld} />
    </Switch>
  );
}
