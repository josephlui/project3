import React from "react";
import Navbar from "./pages/main/Navbar";
import Hero from "./pages/main/Hero";
import Exemplar from "./pages/main/Exemplar";
import Features from "./pages/main/Features";
import About from "./pages/main/About";
import SocialBrand from "./pages/main/SocialBrand";
import Footer from "./pages/main/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./Auth/Register";
import Appointments from "./Appointments/Appointments";
import Connections from "./Connections/ConnectionList";

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
