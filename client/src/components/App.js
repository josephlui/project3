import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Navbar from "./common/Navbar";
import Hero from "./main/Hero";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path="/" component={Navbar} />
          <Route path="/" component={Hero} />
          <Route exact path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
