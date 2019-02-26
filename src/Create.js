import React, { Component } from 'react';
// import { connect } from 'react-redux'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Modal from './Modal'
import v4 from 'uuid'
import CommentsPhotosButtons from './CommentsPhotosButtons'


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
    photo: '',
    creatorForm: false,
    creator: ''
  }
  // componentDidMount() {
  //   this.props.createReception
  //   console.log(this.props.receptions);
  // }
  createReception= ()=> {
    this.props.createReception()
  }
  addCreator= ()=> {
    this.setState({creatorForm: true })
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
    // console.log('handleSubmitName', event);
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
  handleCreator=(event)=> {
    event.preventDefault()
    this.props.submitCreator(this.state.creator)
  }
  handleCreatorName=(event)=> {
    this.setState({creator: event.target.value})
  }
  // addComment=()=>{
  //   this.setState({commentForm: true})
  // }
  // handleComment=(event)=>{
  //   this.setState({comment: event.target.value})
  // }
  // submitComment=(event) => {
  //   event.preventDefault()
  //   this.props.logComment(this.state.comment)
  // }
  // addPhoto=()=>{
  //   this.setState({photoForm: true})
  // }
  // handlePhoto=(event)=>{
  //   this.setState({photo: event.target.value})
  // }
  // submitPhoto=(event) => {
  //   event.preventDefault()
  //   this.props.logPhoto(this.state.photo)
  // }
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
  // submitReception=(event)=> {
  //   event.preventDefault()
  //   this.props.submitWholeReception(this.state.name, this.state.date, this.state.guest, this.state.email, this.state.comment, this.state.photo)
  // }
  render() {
    // console.log( this.props.submitWholeReception)
    return (
    <div className= 'createContainer'>
      <div className= "createButtons">
        <button onClick= {this.addCreator}> Add Your Name </button>
        <br></br>
        <button onClick={this.showNameDateForm}> Add Reception Name and Date</button>
        <br></br>
        <button onClick={this.showInviteForm}>Invite Guests</button>
          <CommentsPhotosButtons logPhoto={this.props.logPhoto} logComment={this.props.logComment} comments={this.props.comments} photos={this.props.photos}/>
        <br></br>
        <button onClick={this.createReception}> Create Reception</button>

      </div>
      <div className='guestList'>
        <h2>Guest List</h2>
        {this.props.guests && <p>Name:{this.props.guests} Email:{this.props.invitedGuestsEmail}</p>}
      </div>
      <div className='sampleBoard'>
        <h3>Created By {this.props.creator}</h3>
        {!this.props.name && <h1>Name Date</h1>}
        <h1 id= 'nameDate' style={{textAlign: 'top'}}>{this.props.name} {this.props.date}</h1>
      {this.state.comments && this.state.comments.length > 1 ? this.state.comments.map(comment => <h3>{comment}</h3>)
      : <h3>{this.props.comments}</h3>}

        <img src={this.props.photos} width='200px'/>
      </div>
      {this.state.creatorForm &&
      <Modal seeModal={this.state.seeModal} handleClose={this.hideModal} >
        <form className='nameDateForm' onSubmit={this.handleCreator}>
          <input placeholder={'Name'} autoFocus style={{ height: '30px', width: '200px', fontSize: '28px'}} onChange={this.handleCreatorName} value={this.state.creator}/>
          <br></br><br></br><br></br>
          <button type="submit">Add</button>
        </form>
      </Modal>}
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


    </div>

    );
  }
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
