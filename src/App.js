import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux'
import Login from './Login'
import NavBar from './NavBar'
import Home from './Home'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Create from './Create'
import Reception from './Reception'

class App extends Component {
  state= {
    commentList: [],
    photoList: [],
    invitedGuestsName: '',
    invitedGuestsEmail: '',
    receptionName: '',
    receptionDate: ''
  }
  storeNameDate=(addedName, addedDate)=> {
    this.setState({receptionName: [...this.state.receptionName, addedName],
    receptionDate: [...this.state.receptionDate, addedDate]})
  }
  invitedGuests=(newGuest, newEmail)=> {
    this.setState({ invitedGuestsName: [...this.state.invitedGuestsName, newGuest],
    invitedGuestsEmail: [...this.state.invitedGuestsEmail, newEmail]
    })
  }
  logComment=(newComment)=> {
    this.setState({commentList: [...this.state.commentList, newComment]})
  }
  logPhoto=(newPhoto)=> {
    this.setState({photoList: [...this.state.photoList, newPhoto]})
  }
  render() {
    return (
      <div className="App">
        <>

          <Route path="/" component={NavBar}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/create"  component={()=><Create storeNameDate={this.storeNameDate} invitedGuests={this.invitedGuests}
            logComment={this.logComment} logPhoto={this.logPhoto} commentList={this.state.commentList} photoList={this.state.photoList}
            invitedGuestsName={this.state.invitedGuestsName} invitedGuestsEmail={this.state.invitedGuestsEmail} receptionName={this.state.receptionName} receptionDate={this.state.receptionDate}/>} />
          <Route path="/reception"  component={Reception}/>
      </>

      </div>
    );
  }
}
// function msp(state) {
//   // console.log(state);
// }
// export default connect(msp)(App);
export default(App)
