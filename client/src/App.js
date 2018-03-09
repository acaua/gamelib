import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Games from "./components/Games";
import CreateGame from "./components/CreateGame";
import Game from "./components/Game";
import EditGame from "./components/EditGame";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Games} />
      <Route path="/create-game" exact component={CreateGame} />
      <Route path="/game/edit/:_id" component={EditGame} />
      <Route path="/game/:_id" component={Game} />
    </Switch>
  </BrowserRouter>
);

export default App;
