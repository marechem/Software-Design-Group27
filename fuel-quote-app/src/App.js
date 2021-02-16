import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, 
Route,
Switch } from "react-router-dom";


//Pages
import LoginPage from "./pages/login";

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
        </Switch>
      </Router>
      
    );
  }
}


export default App;
