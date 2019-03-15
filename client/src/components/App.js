import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Main from "./pages/main/Main";
import Connection from "./pages/Connection"
import Appointment from "./pages/Appointment"

const App = () => {
  return (
    <div id="app">
    <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />  
      <Route exact path="/connection" component={Connection} /> 
      <Route exact path="/appointment" component={Appointment} /> 
      <Route exact path="/" component={Main} />  
     
     
      </Router>
    </div>
  );
};

export default App;
