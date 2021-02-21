import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, 
Route,
Switch } from "react-router-dom";


//Pages
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

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
        </Switch>
      </Router>
      
    );
  }
}


export default App;
