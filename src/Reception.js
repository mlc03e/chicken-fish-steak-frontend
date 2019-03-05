import React, { Component } from 'react';
// import ReactDOM from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Modal from './Modal'
import CommentsPhotosButtons from './CommentsPhotosButtons'
import ChatBubble from 'react-chat-bubble';

class Reception extends Component {

  constructor(props) {
    super(props)
    this.state= {
      // receptions: [],
      selectedReception: null,
      comments: [],
      photos: [],
      // combine: [],
      image: ''
    }

  }


  showReceptionDetails=(receptionId) => {
    // const foundReception = this.state.receptions.find(reception => receptionId === reception.id)
    const clickedReception= this.props.receptions.find(reception=> receptionId == reception.id)
    clickedReception.selected = !clickedReception.selected
    this.setState({
      selectedReception: clickedReception,
      comments: clickedReception.comments,
      photos: clickedReception.photos
    })
    }

    chooseReception=()=> {
       this.props.fetchReceptions()
    }

    reRenderComments = (comment) => {
      this.setState({
        comments: [...this.state.comments, comment]
      })
    }
    reRenderPhotos = (photo) => {
      this.setState(prevState => {
        return {
          photos: [...prevState.photos, photo]
        }
      })
    }
    combineCommentsPhotos=() => {
      this.setState({
        combine: [...this.state.photos, this.state.comments]
      })
    }
    // checkUploadResult= (resultEvent)=>{
    //   if (resultEvent.event === 'success' ) {
    //     this.setState({
    //       image: resultEvent.info.secure_url
    //   })
    //   // .then(widget.close())
    //   }
    // }
    // showWidget= (widget) => {
    //   widget.open()
    // }
  render() {
    console.log(this.state.photos);
    // const commentId= this.state.comments.map(comment=> comment.commentable_id)
    // const guestCommentId= this.props.guests.map(guest=> guest.id)
    // const guestArray= this.props.guests.map(guest=> guest)
    // const merged= [].concat.apply([], guestCommentId)
    // const filteredIds= filteredSelected.map(reception=> reception.comments.map(comment=> comment))
    const filteredSelected= this.props.receptions.filter(reception => reception.selected)
    // console.log(filteredSelected.map(reception=> reception.comments.filter(comment=> comment.id === this.state.comments.filter(comment=> comment.commentable_id === filteredSelected.map(reception=> reception.comments.filter(comment=> comment.id))))))
    console.log(this.state.comments.map(comment=> comment.guest_name) );

    // let widget = window.cloudinary.createUploadWidget({
    //   cloudName: 'dkhlgdovk',
    //   uploadPreset: 'assuwulk'
    // },
    // (error, result) => { this.checkUploadResult(result, widget) })

    return (
      <div className='reception'>

        <div className='chooseReception'>
          <h2 onClick={this.chooseReception}>Choose Reception</h2>
            <div className='createCommentsPhotos'>
            {this.state.selectedReception && <CommentsPhotosButtons image={this.state.image} reRenderComments={this.reRenderComments} reRenderPhotos={this.reRenderPhotos} logPhoto={this.props.logPhoto} logComment={this.props.logComment} commentList={this.props.comments}
              photoList={this.props.photos} reception={this.state.selectedReception} postComments={this.props.postComments} receptions={this.props.receptions}
              showReceptionDetails={this.showReceptionDetails} currentReceptions={this.props.currentReceptions} currentUser={this.props.currentUser}/>}
            </div>
          {this.props.receptions.map(reception => <h3 key={reception.id} onClick={()=>this.showReceptionDetails(reception.id)}>{reception.name}</h3>)}
        </div>
        <div className='receptionBoard'>
          {this.state.selectedReception ? filteredSelected.map(reception => <div className='receptionHeader'><h1 key={reception.creator_id}>{reception.name}</h1> <h2>{reception.date}</h2></div>) : <h1>Reception</h1>}
          {this.state.selectedReception && this.state.comments.map((comment, index) => <div><div  className= {index% 2 ? 'speech-bubble-left': 'speech-bubble-right'} key={comment.id}><h3>{comment.content}</h3><br></br><p id='from' >{comment.guest_name}</p></div></div> ) }
          {this.state.selectedReception && this.state.photos.map((photo, index)=> <div className= {index%2 ? 'speech-bubble-left-photo': "speech-bubble-right-photo"}><img key={photo.id} src={photo.image} width= '200px'/></div>)}

        </div>

      </div>
    );
  }
  // <img src={this.state.image} width= '200px'/>
  // <button onClick={() => this.showWidget(widget)}>Add Photo</button>
// {this.state.selectedReception && this.state.map(selectedReception=> <h1>{selectedReception.comments, selectedReception.photos}</h1>)}
  // <img src={this.props.photos} width='10%'/>
}
// {this.state.selected && this.mappedComments.map(comment=><h3>{comment}</h3>)}
export default withRouter(Reception);
