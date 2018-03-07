import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Games from "./components/Games";
import CreateGame from "./components/CreateGame";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Games} />
      <Route path="/create-game" exact component={CreateGame} />
    </Switch>
  </BrowserRouter>
);

export default App;
