import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Login from './Login'
import NavBar from './NavBar'
import Home from './Home'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Create from './Create'
import Reception from './Reception'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <>

          <Route path="/" component={NavBar}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/home" exact component={Home}/>
        <Switch>
          <Route path="/create"  component={Create} />
          <Route path="/reception"  component={Reception}/>
        </Switch>
      </>
        </Router>
      </div>
    );
  }
}
function msp(state) {
  console.log(state);
}
export default connect(msp)(App);
