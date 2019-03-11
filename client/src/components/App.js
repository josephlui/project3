import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Navbar from "./common/Navbar";
import Hero from "./main/Hero";
import Exemplar from "./main/Exemplar";
import Features from "./main/Features";
import About from "./main/About";
import LatestNews from "./main/LatestNews";
import SocialBrand from "./main/SocialBrand";
import Footer from "./common/Footer";


class App extends Component {
  render() {
    const App = () => (
      <div>
        <BrowserRouter>
        <Navbar />
        <Hero />
        <Exemplar />
        <Features />
        <About />
        <LatestNews />
        <SocialBrand />
        <Footer />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
      </BrowserRouter>
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
