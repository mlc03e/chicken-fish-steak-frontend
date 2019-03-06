import React, { Component } from 'react';
// import { connect } from 'react-redux'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Modal from './Modal'
import v4 from 'uuid'
import CommentsPhotosButtons from './CommentsPhotosButtons'
import InviteGuest from './InviteGuest'


class Create extends Component {
  state= {
    name: '',
    date: '',
    nameDateForm: false,
    seeModal: true,
    inviteForm: false,
    // guest: '',
    // email: '',
    commentForm: false,
    comment: '',
    photoForm: false,
    photo: '',
    creatorForm: false,
    creator: '',
    // submitted: false
  }
  // componentDidMount() {
  //   this.props.createReception
  //   console.log(this.props.receptions);
  // }
  createReception= ()=> {
    this.props.createReception()
  }
  // addCreator= ()=> {
  //   this.setState({creatorForm: true })
  // }
  // showNameDateForm= () => {
  //   this.setState({ nameDateForm: true })
  // }
  // showModal = () => {
  //   this.setState({ seeModal: true })
  // }
  // hideModal = () => {
  //   this.setState({ seeModal: false })
  // }
  handleName=(event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleDate=(event) => {
    this.setState({
      date: event.target.value
    })
  }
  handleSubmitNameDate=(event) => {
    event.preventDefault()
    // console.log('handleSubmitName', event);
    this.props.createReception(this.state.name, this.state.date)

  }
  showInviteForm=()=> {
    this.setState({inviteForm: true})
  }
  // handleInviteName=(event) => {
  //   this.setState({
  //     guest: event.target.value
  //   })
  // }
  // handleInviteEmail=(event) => {
  //   this.setState({
  //     email: event.target.value
  //   })
  // }
  // handleSubmitInvite=(event) => {
  //   event.preventDefault()
  //   // console.log('handleSubmitInvite', event);
  //   this.props.invitedGuests(this.state.guest, this.state.email)
  // }
  handleCreator=(event)=> {
    event.preventDefault()
    this.props.submitCreator(this.state.creator)
  }
  handleCreatorName=(event)=> {
    this.setState({creator: event.target.value})
  }

  // hideNameDateForm=()=> {
  //   this.setState({nameDateForm: false})
  // }
  // hideInvite=()=> {
  //   this.setState({inviteForm: false})
  // }
  // hideComment=()=> {
  //   this.setState({commentForm: false})
  // }
  // hidePhoto=()=> {
  //   this.setState({photoForm: false})
  // }
  // submitReception=(event)=> {
  //   event.preventDefault()
  //   this.props.submitWholeReception(this.state.name, this.state.date, this.state.guest, this.state.email, this.state.comment, this.state.photo)
  // }
  render() {
    // const guestReceptionIds= this.props.guests.map(guest=> guest.reception.id)
    // console.log(this.props.receptions.filter(reception=> reception.id === guestReceptionIds))
    // console.log(this.props.receptions);
    // console.log(this.props.submitted);
    return (
    <div className= 'createContainer'>
      <div className= "createButtons">
        {!this.props.submitted &&
          <div className='nameDateFormContainer'>
          <img id='number' src='https://commerceguys.com/sites/default/files/1.png' width= '60px' />
          <h4 id='nameDateTitle'> Add Name and Date</h4>
        <form className='nameDateForm' onSubmit={this.handleSubmitNameDate}>
          <input placeholder={'Name'} autoFocus style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleName} value={this.state.name}/>
          <input placeholder={'Date'}  style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleDate} value={this.state.date}/>
          <button className="btn" type="submit" >Submit</button>
        </form>
        </div>}
        {this.props.submitted && <InviteGuest receptionId={this.props.receptionId} receptions={this.props.receptions} invitedGuests={this.props.invitedGuests} guests={this.props.guests}/>}
      </div>
      <div className='sampleBoard'>

        {this.props.submitted ? this.props.receptions.map(reception=> <h1 >{reception.name} </h1>): <h1>Name</h1> }
        {this.props.submitted ? this.props.receptions.map(reception=> <h2 >{reception.date} </h2>): <h2>Date</h2>}
        <div className='guestList'>
          <h2>Guest List</h2>
          {this.props.guests.map(guest=> <p>Name:{guest.name} Email:{guest.email}</p>)}
        </div>

      </div>









    </div>

    );
  }
  // <CommentsPhotosButtons logPhoto={this.props.logPhoto} logComment={this.props.logComment} comments={this.props.comments} photos={this.props.photos}/>
  // <button onClick= {this.addCreator}> Add Your Name </button>
  // <br></br>
  // {this.state.commentForm &&
  //   <Modal seeModal={this.state.seeModal} handleClose={this.hideModal} >
  //     <form className='commentForm' onSubmit={this.submitComment}>
  //       <input autoFocus style={{ height: '100px', width: '210px', fontSize: '18px'}} onChange={this.handleComment} value={this.state.comment}/>
  //       <br></br><br></br><br></br>
  //       <button type="submit" >Add</button>
  //     </form>
  //   </Modal>}
  //   {this.state.photoForm &&
  //     <Modal seeModal={this.state.seeModal} handleClose={this.hideModal} >
  //       <form className='commentForm' onSubmit={this.submitPhoto}>
  //         <input autoFocus style={{ height: '100px', width: '210px', fontSize: '18px'}} onChange={this.handlePhoto} value={this.state.photo}/>
  //         <br></br><br></br><br></br>
  //         <button type="submit">Add</button>
  //       </form>
  //     </Modal>}

}
// <h3>Created By {this.props.creator}</h3>
// <div className= 'submitReception'>
//   <form onSubmit={this.submitReception}>
//   <input type='submit' value="Submit Reception"/>
//   </form>
// </div>
// const mapStateToProps = (state) => {
//   return {
//     beef: state.beef
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     makeJi: (name) => dispatch({type: "MAKE_JI", payload: name})
//   }
// }

// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Create));
export default withRouter(Create);
