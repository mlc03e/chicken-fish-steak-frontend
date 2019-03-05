import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux'
import Login from './Login'
import NavBar from './NavBar'
import Home from './Home'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Create from './Create'
import Reception from './Reception'
import v4 from 'uuid'

class App extends Component {
  state= {
    commentList: [],
    photoList: [],
    invitedGuestsName: '',
    email: '',
    // receptionName: '',
    // receptionDate: '',
    receptionWhole: {},
    receptions: [],
    name: '',
    date: '',
    creator: [],
    guests: [],
    comments: [],
    photos: [],
    content: '',
    currentUser: '',
    loggedIn:false,
    // loginName: '',
    // password: '',
  }
  storeNameDate=(addedName, addedDate)=> {
    this.setState({name: addedName,
    date: addedDate})
    this.createReception()
  }
  invitedGuests=(newGuest, newEmail)=> {

    fetch('http://localhost:3000/api/v1/guests', {method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },body: JSON.stringify({
          name: newGuest,
          rsvp: true,
          reception_id: this.state.receptions[0].id,
          password: '',
          email: newEmail
        })
      })
        .then(response => response.json())
        // .then(newReception=> console.log(newReception))
        .then(newGuest=> this.setState({
          guests: [...this.state.guests, newGuest],
          email: [...this.state.email, newEmail]
        }))
  }
  logComment=(newComment)=> {
    // console.log(newComment)
    this.setState({content: newComment},()=>console.log(this.state.content))
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
  createReception=(name, date)=> {
    fetch('http://localhost:3000/api/v1/receptions', {method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },body: JSON.stringify({
        name: name,
        date: date,
        creator_id: this.state.currentUser.id,
      })
    })
      .then(response => response.json())
      // .then(newReception=> console.log(newReception))
      .then(newReception=> this.setState({
        receptions: [...this.state.receptions, newReception]
      }))
  }
  creatorLogin=(name, password)=> {
    fetch('http://localhost:3000/api/v1/creators/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          name: name,
          password: password,
      })
    })
      .then(response => response.json())
      // .then(newPhoto=>console.log(newPhoto))
      .then(creator=> {
        if (creator.error){
          alert(creator.error)
        }
        else {
          this.setState({
            currentUser: creator,
            loggedIn: true
          })
        }
      })
  }
  guestLogin=(name, password)=> {
    fetch('http://localhost:3000/api/v1/guests/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          name: name,
          password: password,
         // reception_id:
      })
    })
      .then(response => response.json())
      // .then(guest=>console.log(guest))
      .then(guest=> {
        if (guest.error){
          alert(guest.error)

        }
        else {
          this.setState({
            currentUser: guest,
            loggedIn: true
          })
        }
      })
    }
newCreatorSignUp=(name, password)=> {
  console.log(name, password);
  fetch('http://localhost:3000/api/v1/creators', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
        name: name,
        password: password
    })
  })
    .then(response => response.json())
    // .then(creator=>console.log(creator))
    .then(creator=> this.setState({

      currentUser: creator,
      loggedIn: true
    }))
}
newGuestSignUp=(name, password)=> {
  fetch('http://localhost:3000/api/v1/guests', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
        name: name,
        reception_id: 1,
        password: password
    })
  })
    .then(response => response.json())
    // .then(guest=>console.log(guest))
    .then(guest=> this.setState({
    //
      currentUser: guest,
      loggedIn: true
    }))
}
//   postComments= (receptionId)=> {
//   fetch('http://localhost:3000/api/v1/comments', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         content: this.state.content,
//         commentable_id: 5,
//         commentable_type: 'Guest',
//         reception_id: receptionId
//     })
//   })
//     .then(response => response.json())
//     .then(newComment=> console.log(newComment))
//     // .then(newComment=> this.setState({
//     //   comments: [...this.state.comments, newComment]
//     // }))
// }

currentReceptions=()=>{
  this.fetchReceptions()
  .then(()=> <Redirect to="/reception" />)
}
logOut=()=> {
  this.setState({currentUser: ''})
}
componentDidMount() {
  fetch('http://localhost:3000/api/v1/guests')
  .then(response => response.json())
  .then(guests => this.setState({guests}))
  // .then(guests => console.log(guests));
}
  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <>
          <Route path="/" component={()=><NavBar currentUser={this.state.currentUser} logOut={this.logOut}/>}/>
          <Route path="/login" exact component={()=><Login creatorLogin={this.creatorLogin} guestLogin={this.guestLogin}
            currentUser={this.state.currentUser} loggedIn={this.state.loggedIn} newCreatorSignUp={this.newCreatorSignUp}
            newGuestSignUp={this.newGuestSignUp} logOut={this.logOut}/>}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/create"  email= {this.state.email} component={()=><Create storeNameDate={this.storeNameDate} invitedGuests={this.invitedGuests}
            logComment={this.logComment} logPhoto={this.logPhoto} comments={this.state.comments} photos={this.state.photos}
            guests={this.state.guests} invitedGuestsEmail={this.state.invitedGuestsEmail} submitCreator={this.submitCreator} creator={this.state.creator}
            name={this.state.name} date={this.state.date} createReception={this.createReception} receptions={this.state.receptions}/>} />
          <Route path="/reception"  component={()=><Reception currentUser={this.state.currentUser} guests={this.state.guests} receptions={this.state.receptions} fetchReceptions={this.fetchReceptions} comments={this.state.comments}
            photos={this.state.photos} logComment={this.logComment} logPhoto={this.logPhoto} currentReceptions={this.currentReceptions}/>}/>
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
