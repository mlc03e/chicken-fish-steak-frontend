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
        <div className='logo'>
          <img id='chicken' src={require('./pics/chicken.png')} alt='chicken'/>
          <img id='fish' src={require('./pics/fish.png')} alt='fish'/>
          <img id='steak' src={require('./pics/steak.png')} alt='steak'/>
        </div>

        <div className='link-container'>
          <div className='links'>
            <Link to="/Home" style={{fontSize: "20px", spacing: '30px', color: "#4f5359", textDecoration: 'none' }} >Home</Link>
              {!this.props.currentUser.name ? <Link to="/Login" style={{fontSize: "20px", color: "#4f5359", textDecoration: 'none'}}>Log In</Link>
            : <Link to="/login" style={{fontSize: "20px", color: "#4f5359", textDecoration: 'none'}}> Hi {this.props.currentUser.name}</Link>}
            {this.props.currentUser &&   <Link to="/login" style={{fontSize: "20px", color: "#4f5359", textDecoration: 'none'}} onClick={this.props.logOut}>Log Out</Link>}
          </div>

        </div>
      </div>
    );
  }

}

export default NavBar
