import React, { Component } from 'react';
// import ReactDOM from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Modal from './Modal'
import CommentsPhotosButtons from './CommentsPhotosButtons'

class Reception extends Component {

  constructor(props) {
    super(props)
    this.state= {
      // receptions: [],
      selectedReception: null,
      comments: [],
      photos: []
    }

  }

  // componentDidMount() {
  //   this.props.fetchReceptions()
  // }

  showReceptionDetails=(receptionId) => {
    // const foundReception = this.state.receptions.find(reception => receptionId === reception.id)
    const clickedReception= this.props.receptions.find(reception=> receptionId == reception.id)
        clickedReception.selected = !clickedReception.selected
    //     return reception
    //   } else {
    //     return reception
    //   }
    // })
    // console.log("we are here");
    this.setState({
      selectedReception: clickedReception,
      comments: clickedReception.comments,
      photos: clickedReception.photos
    })
    // console.log(clickedReception)
    }

    chooseReception=()=> {
       this.props.fetchReceptions()
    }

    reRenderComments = (comment) => {
      // console.log(comment)
      this.setState({
        comments: [...this.state.comments, comment]
      })
    }
    reRenderPhotos = (photo) => {
      // console.log(photo)
      this.setState({
        photos: [...this.state.photos, photo]
      })
    }

  render() {
    // console.log(this.props.receptions);

    // const mappedComments= this.state.receptions.map(reception => reception.comments)
    // const mappedPhotos= this.state.receptions.map(reception => reception.photos)
    const filteredSelected= this.props.receptions.filter(reception => reception.selected)
      // console.log(this.state.comments.map(comment=> comment.commentable_type))
    // console.log(this.props.receptions.map(reception => reception))
    return (
      <div className='reception'>

        <div className='chooseReception'>
          <h2 onClick={this.chooseReception}>Choose Reception</h2>
            <div className='createCommentsPhotos'>
            {this.state.selectedReception && <CommentsPhotosButtons reRenderComments={this.reRenderComments} reRenderPhotos={this.reRenderPhotos} logPhoto={this.props.logPhoto} logComment={this.props.logComment} commentList={this.props.comments}
              photoList={this.props.photos} reception={this.state.selectedReception} postComments={this.props.postComments} receptions={this.props.receptions}
              showReceptionDetails={this.showReceptionDetails} currentReceptions={this.props.currentReceptions}/>}
            </div>
          {this.props.receptions.map(reception => <h3 key={reception.creator_id} onClick={()=>this.showReceptionDetails(reception.id)}>{reception.name}</h3>)}
        </div>
        <div className='receptionBoard'>
          {this.state.selectedReception ? filteredSelected.map(reception => <h1 key={reception.creator_id}>{reception.name}</h1> ) : <h1>Reception</h1>}
          {this.state.selectedReception && this.state.comments.map((comment, index) => <div><div  className= {index% 2 ? 'commentLeft': 'commentRight'} key={comment.id}><h4>{comment.content}</h4><br></br> From<p>{comment.commentable_type}</p></div></div> ) }
          {this.state.selectedReception && this.state.photos.map((photo, index)=> <div className= {index%2 ? 'photoLeft': "photoRight"}><img key={photo.id} src={photo.image} width= '200px'/></div>)}

        </div>

      </div>
    );
  }

  // <img src={this.props.photos} width='10%'/>
}
// {this.state.selected && this.mappedComments.map(comment=><h3>{comment}</h3>)}
export default withRouter(Reception);
