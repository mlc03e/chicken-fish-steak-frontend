import React, { Component } from 'react';
// import { connect } from 'react-redux'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Modal from './Modal'


class Create extends Component {
  state= {
    name: '',
    date: '',
    nameDateForm: false,
    seeModal: true,
    inviteForm: false,
    guest: '',
    email: '',
    commentForm: false,
    comment: '',
    photoForm: false,
    photo: ''
  }
  showNameDateForm= () => {
    this.setState({ nameDateForm: true })
  }
  showModal = () => {
    this.setState({ seeModal: true })
  }
  hideModal = () => {
    this.setState({ seeModal: false })
  }
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
    console.log('handleSubmitName', event);
    this.props.storeNameDate(this.state.name, this.state.date)
  }
  showInviteForm=()=> {
    this.setState({inviteForm: true})
  }
  handleInviteName=(event) => {
    this.setState({
      guest: event.target.value
    })
  }
  handleInviteEmail=(event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleSubmitInvite=(event) => {
    event.preventDefault()
    // console.log('handleSubmitInvite', event);
    this.props.invitedGuests(this.state.guest, this.state.email)

  }
  addComment=()=>{
    this.setState({commentForm: true})
  }
  handleComment=(event)=>{
    this.setState({comment: event.target.value})
  }
  submitComment=(event) => {
    event.preventDefault()
    this.props.logComment(this.state.comment)
  }
  addPhoto=()=>{
    this.setState({photoForm: true})
  }
  handlePhoto=(event)=>{
    this.setState({photo: event.target.value})
  }
  submitPhoto=(event) => {
    event.preventDefault()
    this.props.logPhoto(this.state.photo)
  }
  hideNameDateForm=()=> {
    this.setState({nameDateForm: false  })
  }
  hideInvite=()=> {
    this.setState({inviteForm: false})
  }
  hideComment=()=> {
    this.setState({commentForm: false})
  }
  hidePhoto=()=> {
    this.setState({photoForm: false})
  }

  render() {
    console.log( this.props.receptionName)
    return (
    <div className= 'createContainer'>
      <div className= "createButtons">
        <button onClick={this.showNameDateForm}>Add Name and Date</button>
        <br></br>
        <button onClick={this.showInviteForm}>Invite Guests</button>
        <br></br>
        <button onClick={this.addComment}>Add Comment</button>
        <br></br>
        <button onClick={this.addPhoto}>Add Photo</button>
      </div>
      <div className='guestList'>
        <h2>Guest List</h2>
        {this.props.invitedGuestsName && <p>Name:{this.props.invitedGuestsName} Email:{this.props.invitedGuestsEmail}</p>}

      </div>
      <div className='sampleBoard'>
        {!this.state.name && <h1>Name Date</h1>}
        <h1 id= 'nameDate' style={{textAlign: 'top'}}>{this.state.name} {this.state.date}</h1>
      {this.state.commentList && this.state.commentList.length > 1 ? this.state.commentList.map(comment => <h3>{comment}</h3>)
      : <h3>{this.props.commentList}</h3>}

        <p>{this.props.photoList}</p>
      </div>
      {this.state.nameDateForm &&
      <Modal seeModal={this.state.seeModal} handleClose={this.hideModal} >
        <form className='nameDateForm' onSubmit={this.handleSubmitNameDate}>
          <input placeholder={'Name'} autoFocus style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleName} value={this.state.name}/>
          <input placeholder={'Date'}  style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleDate} value={this.state.date}/>
          <br></br><br></br><br></br>
          <button type="submit">Add</button>
        </form>
      </Modal>}
      {this.state.inviteForm &&
      <Modal seeModal={this.state.seeModal} handleClose={this.hideModal} >
        <form className='nameDateForm' onSubmit={this.handleSubmitInvite}>
          <input placeholder={'Name'} autoFocus style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleInviteName} value={this.state.guest}/>
          <input placeholder={'Email'} style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleInviteEmail} value={this.state.email}/>
          <br></br><br></br><br></br>
          <button type="submit">Add</button>
        </form>
      </Modal>}
      {this.state.commentForm &&
      <Modal seeModal={this.state.seeModal} handleClose={this.hideModal} >
        <form className='commentForm' onSubmit={this.submitComment}>
          <input autoFocus style={{ height: '100px', width: '210px', fontSize: '18px'}} onChange={this.handleComment} value={this.state.comment}/>
          <br></br><br></br><br></br>
          <button type="submit" >Add</button>
        </form>
      </Modal>}
      {this.state.photoForm &&
      <Modal seeModal={this.state.seeModal} handleClose={this.hideModal} >
        <form className='commentForm' onSubmit={this.submitPhoto}>
          <input autoFocus style={{ height: '100px', width: '210px', fontSize: '18px'}} onChange={this.handlePhoto} value={this.state.photo}/>
          <br></br><br></br><br></br>
          <button type="submit">Add</button>
        </form>
      </Modal>}

    </div>
    );
  }

}
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
