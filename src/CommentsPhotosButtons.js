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
    photos: [],
    image: ''
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
    if (this.props.currentUser.rsvp){
      fetch('http://localhost:3000/api/v1/comments', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            content: this.state.comment,
            commentable_id: this.props.currentUser.id,
            commentable_type: 'Guest',
            reception_id: this.props.reception.id
        })
      })
        .then(response => response.json())
        // .then(newComment => console.log(newComment, this.state.comments))
        // .then(newComment=> this.setState({comments:[...this.state.comments, newComment]}))
        .then(newComment=> this.props.reRenderComments(newComment))
        // .then(()=> this.props.currentReceptions())
        .then(newComment=> this.hideModal())
    }
    else {
      fetch('http://localhost:3000/api/v1/comments', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            content: this.state.comment,
            commentable_id: this.props.currentUser.id,
            commentable_type: 'Creator',
            reception_id: this.props.reception.id
        })
      })
        .then(response => response.json())
        // .then(newComment => console.log(newComment, this.state.comments))
        // .then(newComment=> this.setState({comments:[...this.state.comments, newComment]}))
        .then(newComment=> this.props.reRenderComments(newComment))
        // .then(()=> this.props.currentReceptions())
        .then(newComment=> this.hideModal())
    }

      // this.hideModal()
  }
  addPhoto=()=>{
    this.setState({photoForm: true})
  }
  // handlePhoto=(event)=>{
  //   this.setState({photo: event.target.value})
  // }
  submitPhoto=(image) => {
    // event.preventDefault()
    // this.props.logPhoto(this.state.photo)
    fetch('http://localhost:3000/api/v1/photos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          image: image,
          imageable_id: this.props.currentUser.id,
          imageable_type: 'Guest',
          reception_id: this.props.reception.id
      })
    })
      .then(response => response.json())
      // .then(newPhoto=>console.log(newPhoto))
      // .then(newPhoto=> this.setState({photos:[...this.state.photos, newPhoto]}))
      //.then(newPhoto => console.log(newPhoto))
      .then(newPhoto=> this.props.reRenderPhotos(newPhoto))
      .then(newPhoto=> this.hideModal())

  }
  hideModal = () => {
    this.setState({ commentForm: false })
  }
  checkUploadResult= (resultEvent)=>{
    if (resultEvent.event === 'success' ) {

      this.setState({
        image: resultEvent.info.secure_url
    },() => this.submitPhoto(this.state.image))
    }

  }
  showWidget= (widget) => {
    widget.open()
  }
  render() {
    console.log(this.props.reception.id);
    let widget = window.cloudinary.createUploadWidget({
      cloudName: 'dkhlgdovk',
      uploadPreset: 'assuwulk'
    },
    (error, result) => { this.checkUploadResult(result, widget) })
    return (
      <div>

        <div >
          <button className="btn" onClick={this.addComment}>Comment</button>
          <br></br>
          <button className="btn" onClick={() => this.showWidget(widget)}>Photo</button>
        </div>

        {this.state.commentForm &&
        <Modal seeModal={this.state.seeModal} handleClose={this.hideModal} >
          <form className='commentForm' onSubmit={this.submitComment}>
            <input autoFocus style={{ height: '100px', width: '210px', fontSize: '18px'}} onChange={this.handleComment} value={this.state.comment}/>
            <br></br><br></br><br></br>
          <button type="submit" >Add</button>
          </form>
        </Modal>}

      </div>
    );
  }

}
// <button className="btn" onClick={this.addPhoto}>Photo</button>
// {this.state.photoForm &&
// <Modal seeModal={this.state.seeModal} handleClose={this.hideModal} >
//   <form className='commentForm' onSubmit={this.submitPhoto}>
//     <input autoFocus style={{ height: '100px', width: '210px', fontSize: '18px'}} onChange={this.handlePhoto} value={this.state.photo}/>
//     <br></br><br></br><br></br>
//     <button type="submit">Add</button>
//   </form>
// </Modal>}
export default CommentsPhotosButtons;
