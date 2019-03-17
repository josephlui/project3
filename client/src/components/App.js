import React from "react";
import Navbar from "./pages/main/NavBar/Navbar";
import Hero from "./pages/main/Hero";
import Exemplar from "./pages/main/Exemplar";
import Features from "./pages/main/Features";
import About from "./pages/main/About";
import SocialBrand from "./pages/main/SocialBrand";
import Footer from "./pages/main/Footer";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./Auth/Register";
import Appointments from "./pages/Appointment";
import Connections from "./pages/Connection";
import NavbarPages from "./pages/main/NavBar/NavBarPages";
import Logout from "./common/Logout";

const App = () => {
  return (
    <div id="app">
      {/* Home NavBar */}
      <Route path="/" exact component={Navbar} />

      {/* Sub NavBar Links*/}
      <Route path="/appointments" exact component={NavbarPages} />
      <Route path="/connections" exact component={NavbarPages} />
      <Route path="/login" exact component={NavbarPages} />
      {/* Home NavBar Links */}
      <Route path="/appointments" exact component={Appointments} />
      <Route path="/connections" exact component={Connections} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/logout" exact component={Logout} />

      {/* Home Page */}
      <Route path="/" exact component={Hero} />
      <Route path="/" exact component={Exemplar} />
      <Route path="/" exact component={Features} />
      <Route path="/" exact component={About} />
      <Route path="/" exact component={SocialBrand} />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
