import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './Login'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";

class NavBar extends Component {

  render() {
    return (
      <div className= 'navBar'>
        <Link to="/Home" style={{fontSize: "15px", spacing: '30px', color: "#4f5359", textDecoration: 'none' }} >Home</Link>
        <Link to="/Login" style={{fontSize: "15px", color: "#4f5359", textDecoration: 'none'}}>LogIn/Out</Link>  
      </div>
    );
  }

}

export default NavBar
