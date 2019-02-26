import React, { Component } from 'react';
import Modal from './Modal'

class CommentsPhotosButtons extends Component {

  state= {
    commentForm: false,
    comment: '',
    photoForm: false,
    photo: '',
    seeModal: true,
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
  render() {
    return (
      <div>

        <div >
          <button onClick={this.addComment}>Add Comment</button>
          <br></br>
          <button onClick={this.addPhoto}>Add Photo</button>
        </div>

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

export default CommentsPhotosButtons;
