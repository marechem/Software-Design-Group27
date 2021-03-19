import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, 
Route,
Switch } from "react-router-dom";


//Pages
//import RegisterPage from "./pages/register";
import ProfilePage from "./pages/profile";

//Components
import TopNavbar from "./components/navbar.component";
import UserLogin from "./components/login-component";
import NewFuelQuote from "./components/fuelQuote.component";
import QuoteHistory from "./components/quoteHistory.component";
import RegisterPage from "./components/register.component";


class App extends Component {
  render() {
    return (
      <Router>
        <TopNavbar />
        <Switch>
          <Route exact path="/" component={UserLogin} />
          <Route path="/newForm" component={NewFuelQuote} />
          <Route path="/quoteHistory" component={QuoteHistory} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
      
    );
  }
}


export default App;
