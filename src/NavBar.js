import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './Login'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { withRouter } from "react-router";

class NavBar extends Component {

  render() {
    return (
      <div className= 'navBar'>

      <NavLink to="/Login" activeStyle={{fontSize: "15px", color: "black" }} >Sign In/Out</NavLink>

      <NavLink to="/Home" activeStyle={{fontSize: "15px", color: "black" }} >Home</NavLink>
      </div>
    );
  }

}

export default NavBar
