import React from "react";
import Navbar from "./pages/main/NavBar/Navbar";
import Hero from "./pages/main/Hero";
import Exemplar from "./pages/main/Exemplar";
import Features from "./pages/main/Features";
import SocialBrand from "./pages/main/SocialBrand";
import Footer from "./pages/main/Footer";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./Auth/Register";
import Appointments from "./Appointments/Appointments";
import ConnectionList from "./Connections/ConnectionList";
import NavbarPages from "./pages/main/NavBar/NavBarPages";
import Logout from "./common/Logout";

const App = () => {
  return (
    <div id="app">
      {/* Home Page */}
      <Route path="/" exact component={Navbar} />
      <Route path="/" exact component={Hero} />
      <Route path="/" exact component={Exemplar} />
      <Route path="/" exact component={Features} />
      <Route path="/" exact component={SocialBrand} />

      {/* Login */}
      <Route path="/login" exact component={Navbar} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

      {/* Appointments Page */}
      <Route path="/appointments" exact component={Navbar} />
      <Route path="/appointments" exact component={Appointments} />

      {/* Connections Page */}
      <Route path="/connections" exact component={Navbar} />
      <Route path="/connections" exact component={ConnectionList} />

      {/* Logout */}
      <Route path="/logout" exact component={Navbar} />
      <Route path="/logout" exact component={Logout} />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
