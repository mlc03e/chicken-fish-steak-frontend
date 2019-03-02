import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Login from './Login'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";

class NavBar extends Component {

  render() {
    // console.log(this.props);
    return (
      <div className= 'navBar'>
        <Link to="/Home" style={{fontSize: "15px", spacing: '30px', color: "#4f5359", textDecoration: 'none' }} >Home</Link>
        {this.props.currentUser.name ? <Link to="/login" style={{fontSize: "15px", color: "#4f5359", textDecoration: 'none'}}> Hi {this.props.currentUser.name}</Link>
      : <Link to="/Login" style={{fontSize: "15px", color: "#4f5359", textDecoration: 'none'}}>Log In</Link>}
      {this.props.currentUser &&   <Link to="/login" style={{fontSize: "15px", color: "#4f5359", textDecoration: 'none'}} onClick={this.props.logOut}>Log Out</Link>}
      </div>
    );
  }

}

export default NavBar
