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
  state= {
    commentList: [],
    photoList: [],
    invitedGuestsList: []
  }
  storeNameDate=(name, date)=> {
    console.log(name, date);
  }
  invitedGuests=(newGuest, newEmail)=> {
    // this.setState({ invitedGuestsList: [...this.state.invitedGuestsList, {newGuest, newEmail}]})
    console.log(newGuest,newEmail);
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
        <Router>
        <>

          <Route path="/" component={NavBar}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/home" exact component={Home}/>
        <Switch>
          <Route path="/create"  component={()=><Create storeNameDate={this.storeNameDate} invitedGuests={this.invitedGuests}
            logComment={this.logComment} logPhoto={this.logPhoto} commentList={this.state.commentList} photoList={this.state.photoList}
            invitedGuestsList={this.state.invitedGuestsList} />} />
          <Route path="/reception"  component={Reception}/>
        </Switch>
      </>
        </Router>
      </div>
    );
  }
}
// function msp(state) {
//   // console.log(state);
// }
// export default connect(msp)(App);
export default(App)
