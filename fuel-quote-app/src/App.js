import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, 
Route,
Switch } from "react-router-dom";


//Pages
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProfilePage from "./pages/profile";

//Components
import TopNavbar from "./components/navbar.component";
import NewFuelQuote from "./components/fuelQuote.component";


class App extends Component {
  render() {
    return (
      <Router>
        <TopNavbar />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/newForm" component={NewFuelQuote} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
      
    );
  }
}


export default App;
