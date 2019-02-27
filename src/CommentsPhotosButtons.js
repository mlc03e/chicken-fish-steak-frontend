import React, { Component } from 'react';
import Modal from './Modal'

class CommentsPhotosButtons extends Component {


  state= {
    commentForm: false,
    comment: '',
    photoForm: false,
    photo: '',
    seeModal: true,
    comments: [],
    photos: []
    // receptionId: this.props.reception.id
    // how can I get the reception id so that the comment post has it
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



  addComment=()=>{
    this.setState({commentForm: true})
  }
  // hideCommentForm=()=>{
  //   this.setState({commentForm: false})
  // }
  handleComment=(event)=>{
    this.setState({comment: event.target.value})
  }
  submitComment=(event) => {
    event.preventDefault()
    // this.props.logComment(this.state.comment)
    // this.props.postComments(this.props.reception.id)
    fetch('http://localhost:3000/api/v1/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          content: this.state.comment,
          commentable_id: 1,
          commentable_type: 'Guest',
          reception_id: this.props.reception.id
      })
    })
      .then(response => response.json())
      .then(newComment=> this.setState({comments:[...this.state.comments, newComment]}))
  }
  addPhoto=()=>{
    this.setState({photoForm: true})
  }
  handlePhoto=(event)=>{
    this.setState({photo: event.target.value})
  }
  submitPhoto=(event) => {
    event.preventDefault()
    // this.props.logPhoto(this.state.photo)
    fetch('http://localhost:3000/api/v1/photos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          image: this.state.photo,
          imageable_id: 1,
          imageable_type: 'Guest',
          reception_id: this.props.reception.id
      })
    })
      .then(response => response.json())
      // .then(newPhoto=>console.log(newPhoto))
      .then(newPhoto=> this.setState({photos:[...this.state.photos, newPhoto]}))
  }



  render() {
    // console.log(this.props.reception && this.props.reception.id);
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
