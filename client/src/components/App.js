import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
};

export default App;
