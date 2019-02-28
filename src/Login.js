import React, { Component } from 'react';
import NewUser from './NewUser'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Login extends Component {
  state={
    value: '',
    loginName: '',
    password: '',
    // currentUser: '',
    // loggedIn:false,
    logIn: false,
    newUser: false
  }

  handleChange=(event)=> {
    this.setState({value:event.target.value})
  }

  handleLoginName=(event)=> {
    this.setState({loginName:event.target.value})
  }
  handleLoginPassword=(event)=> {
    this.setState({password:event.target.value})
  }
  handleLogin=()=> {
    this.setState({logIn: true})
  }
  handleNewUser=()=> {
    this.setState({newUser: true})
  }
  handleLogOut=()=> {

  }
  handleSubmitLogin=(event)=> {
    event.preventDefault()
    if (this.state.value === 'creator'){
      this.props.creatorLogin(this.state.loginName, this.state.password)
    //   fetch('http://localhost:3000/api/v1/creators/login', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify({
    //         name: this.state.loginName,
    //         password: this.state.password,
    //     })
    //   })
    //     .then(response => response.json())
    //     // .then(newPhoto=>console.log(newPhoto))
    //     .then(creator=> {
    //       if (creator.error){
    //         alert(creator.error)
    //       }
    //       else {
    //         this.setState({
    //           currentUser: creator,
    //           loggedIn: true
    //         })
    //       }
    //     })
    }
  else if (this.state.value === 'guest') {
    this.props.guestLogin(this.state.loginName, this.state.password)
    // fetch('http://localhost:3000/api/v1/guests/login', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //       name: this.state.loginName,
    //       password: this.state.password,
    //      // reception_id:
    //   })
    // })
    //   .then(response => response.json())
    //   // .then(guest=>console.log(guest))
    //   .then(guest=> {
    //     if (guest.error){
    //       alert(guest.error)
    //
    //     }
    //     else {
    //       this.setState({
    //         currentUser: guest,
    //         loggedIn: true
    //       })
    //     }
    //   })
    // }
  }
}
  render() {
    return (
      <div>
        <h1 onClick={this.handleLogin}>Log In</h1> <h1 onClick={this.handleNewUser}>New User</h1>
        {this.props.currentUser &&   <Link to="/Login" >Log Out</Link>}
        {this.state.loggedIn && <h3>{this.state.loginName}</h3>}

        {this.state.logIn &&
          <div>
          <form onSubmit={this.handleSubmitLogin}>
          <input placeholder={'Name'} autoFocus style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleLoginName} value={this.state.loginName}/>
          <input placeholder={'Password'} style={{ height: '30px', width: '200px', fontSize: '28px'}} type='password' onChange={this.handleLoginPassword} value={this.state.password}/>
          <button type="submit">Login</button>
        </form>
        <select value={this.state.value} onChange={this.handleChange}>
          <option>Select User Type</option>
          <option value='creator'>Creator</option>
          <option value='guest'>Guest</option>
        </select>
        </div>
      }
      {this.state.newUser && <NewUser newCreatorSignUp={this.props.newCreatorSignUp} newGuestSignUp={this.props.newGuestSignUp}/>}
      </div>
    );
  }

}

export default Login;
