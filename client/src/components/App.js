import React from "react";
import Navbar from "./common/Navbar";
import Hero from "./main/Hero";
import Exemplar from "./main/Exemplar";
import Features from "./main/Features";
import About from "./main/About";
import SocialBrand from "./main/SocialBrand";
import Footer from "./common/Footer";
import { BrowserRouter as Route } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Appointments from "./Appointments/Appointments";
import Connections from "./Connections/Connections";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Route path="/" exact component={Hero} />
      <Route path="/" exact component={Exemplar} />
      <Route path="/" exact component={Features} />
      <Route path="/" exact component={About} />
      <Route path="/" exact component={SocialBrand} />
      <Route path="/appointments" exact component={Appointments} />
      <Route path="/connections" exact component={Connections} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Footer />
    </div>
  );
};

export default App;
