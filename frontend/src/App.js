import React from "react";

import { Home } from "./Home";
import { Expenses } from "./Expenses";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />

        <Route path="/expenses" exact={true} component={Expenses} />
      </Switch>
    </Router>
  );
};

export default App;
