import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter as Router, 
Route,
Switch } from "react-router-dom";


//Pages
import LoginPage from "./pages/login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}


export default App;
