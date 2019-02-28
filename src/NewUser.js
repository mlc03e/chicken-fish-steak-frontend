import React, { Component } from 'react';

class NewUser extends Component {
  state={
    newUser: '',
    newUserPassword: '',
    valueNewUser: '',
  }
  handleChange=(event)=> {
    this.setState({valueNewUser:event.target.value})
  }
  handleName=(event)=> {
    this.setState({newUser:event.target.value})
  }
  handlePassword=(event)=> {
    this.setState({newUserPassword:event.target.value})
  }
  handleSubmitNewUser=(event)=> {
    event.preventDefault()
    if (this.state.valueNewUser === 'creator'){
      this.props.newCreatorSignUp(this.state.newUser, this.state.newUserPassword)
      // fetch('http://localhost:3000/api/v1/creators', {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Accept": "application/json"
      //   },
      //   body: JSON.stringify({
      //       name: this.state.newUser,
      //       password: this.state.newUserPassword
      //   })
      // })
      //   .then(response => response.json())
      //   // .then(newPhoto=>console.log(newPhoto))
      //   .then(creator=> this.setState({
      //
      //     currentUser: creator,
      //     loggedIn: true
      //   }))
    }
    else if (this.state.valueNewUser === 'guest') {
      this.props.newGuestSignUp(this.state.newUser, this.state.newUserPassword)
      // fetch('http://localhost:3000/api/v1/guests', {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Accept": "application/json"
      //   },
      //   body: JSON.stringify({
      //       name: this.state.newUser,
      //       reception_id: 1,
      //       password: this.state.newUserPassword
      //   })
      // })
      //   .then(response => response.json())
      //   .then(guest=>console.log(guest))
        // .then(creator=> this.setState({
        //
        //   currentUser: creator,
        //   loggedIn: true
        // }))
    }

  }
  render() {
    return (
      <div>
      <h1>New User</h1>
      <form onSubmit={this.handleSubmitNewUser}>
        <input placeholder={'Name'} autoFocus style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleName} value={this.state.newUser}/>
        <input type= 'password' placeholder={'Password'} style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handlePassword} value={this.state.newUserPassword}/>
        <button type="submit">Sign Up</button>
    </form>
      <select  onChange={this.handleChange}>
        <option>Select User Type</option>
        <option value='creator'>Creator</option>
        <option value='guest'>Guest</option>
      </select>
      </div>
    );
  }

}

export default NewUser;
