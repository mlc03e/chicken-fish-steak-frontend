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
import v4 from 'uuid'

class App extends Component {
  state= {
    commentList: [],
    photoList: [],
    invitedGuestsName: '',
    invitedGuestsEmail: '',
    // receptionName: '',
    // receptionDate: '',
    receptionWhole: {},
    receptions: [],
    name: '',
    date: '',
    creator: [],
    guests: [],
    comments: [],
    photos: []
  }
  storeNameDate=(addedName, addedDate)=> {
    this.setState({name: addedName,
    date: addedDate})
  }
  invitedGuests=(newGuest, newEmail)=> {
    this.setState({ guests: [...this.state.guests, newGuest],
    invitedGuestsEmail: [...this.state.invitedGuestsEmail, newEmail]
    })
  }
  logComment=(newComment)=> {
    this.setState({comments: [...this.state.comments, newComment]})
  }
  logPhoto=(newPhoto)=> {
    this.setState({photos: [...this.state.photos, newPhoto]})
  }
  submitCreator=(creatorName)=> {
    this.setState({creator: [...this.state.creator, creatorName]})
  }
  // submitWholeReception=(wholeName, wholeDate, wholeGuest, wholeEmail, wholeComment, wholePhoto)=> {
  //   this.setState({ receptionWhole: {wholeName, wholeDate, wholeGuest, wholeEmail, wholeComment, wholePhoto}})
  // }
  fetchReceptions= ()=> {
    fetch('http://localhost:3000/api/v1/receptions')
    .then(response => response.json())
    // .then(receptions => this.setState({receptions}))
    .then(receptions => {
      const updatedReceptions = receptions.map(reception => {
        return {...reception, selected: false}
      })
      this.setState({
        receptions: updatedReceptions
      })
    }
    )
  }
  createReception=()=> {
    fetch('http://localhost:3000/api/v1/receptions', {method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },body: JSON.stringify({
        name: this.state.name,
        date: this.state.date,
        creator_id: v4(),
      })
    })
      .then(response => response.json())
      // .then(newReception=> console.log(newReception))
      .then(newReception=> this.setState({
        receptions: [...this.state.receptions, newReception]
      }))
  }
  //change id to creator.id name: creator.name
  // guests: this.state.guests,
  // photos: this.state.photos,
  // comments: this.state.comments
  render() {
    return (
      <div className="App">
        <>
          <Route path="/" component={NavBar}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/create"  component={()=><Create storeNameDate={this.storeNameDate} invitedGuests={this.invitedGuests}
            logComment={this.logComment} logPhoto={this.logPhoto} comments={this.state.comments} photos={this.state.photos}
            guests={this.state.guests} invitedGuestsEmail={this.state.invitedGuestsEmail} submitCreator={this.submitCreator} creator={this.state.creator}
            name={this.state.name} date={this.state.date} createReception={this.createReception} receptions={this.state.receptions}/>} />
          <Route path="/reception"  component={()=><Reception receptions={this.state.receptions} fetchReceptions={this.fetchReceptions} comments={this.state.comments}
            photos={this.state.photos} logComment={this.logComment} logPhoto={this.logPhoto}/>}/>
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
