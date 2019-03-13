import React from "react";
// import { Route, Switch } from "react-router-dom";

// import Login from "./Auth/Login";
// import Register from "./Auth/Register";
import Navbar from "./common/Navbar";
import Hero from "./main/Hero";
import Exemplar from "./main/Exemplar";
import Features from "./main/Features";
import About from "./main/About";
import SocialBrand from "./main/SocialBrand";
import Footer from "./common/Footer";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Hero />
      <Exemplar />
      <Features />
      <About />

      <SocialBrand />
      <Footer />
      {/* <Route path="/Login" exact component={Login} />
      <Route path="/Register" exact component={Register} /> */}
    </div>
  );
};

export default App;
