import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Navbar from "./common/Navbar";
import Hero from "./main/Hero";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
};

export default App;
