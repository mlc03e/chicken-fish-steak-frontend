import React, { Component } from 'react';
// import ReactDOM from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Modal from './Modal'
import CommentsPhotosButtons from './CommentsPhotosButtons'

class Reception extends Component {

  state= {
    // receptions: [],
    selectedReception: null
  }

  // componentDidMount() {
  //   this.props.fetchReceptions()
  // }

  showReceptionDetails=(receptionId) => {
    // const foundReception = this.state.receptions.find(reception => receptionId === reception.id)
    const clickedReception= this.props.receptions.map(reception=> {
      if (receptionId === reception.creator_id) {
        reception.selected = !reception.selected
        return reception
      } else {
        return reception
      }
    })
    this.setState({selectedReception: clickedReception})
    console.log(clickedReception)
    }
    chooseReception=()=> {
       this.props.fetchReceptions()
    }

  render() {

    // const mappedComments= this.state.receptions.map(reception => reception.comments)
    // const mappedPhotos= this.state.receptions.map(reception => reception.photos)
    const filteredSelected= this.props.receptions.filter(reception => reception.selected)
    // console.log(this.props.receptions.map(reception => reception))
    return (
      <div className='reception'>
        <div className='createButtons'>
        <CommentsPhotosButtons logPhoto={this.props.logPhoto} logComment={this.props.logComment} commentList={this.props.comments} photoList={this.props.photos}/>
        </div>
        <div className='guestList'>
          <h2 onClick={this.chooseReception}>Choose Reception</h2>

          {this.props.receptions.map(reception => <h3 key={reception.creator_id} onClick={()=>this.showReceptionDetails(reception.creator_id)}>{reception.name}</h3>)}
        </div>
        <div className='receptionBoard'>
          {this.state.selectedReception ? filteredSelected.map(reception => <h1 key={reception.creator_id}>{reception.name}</h1> ) : <h1>Reception</h1>}
          {this.state.selectedReception && filteredSelected.map(reception => reception.comments.map(comment => <h3 key={comment.id}>{comment.content}</h3> )) }
          {this.state.selectedReception && filteredSelected.map(reception=> reception.photos.map(photo=> <img key={photo.id} src={photo.image}/>))}
          {this.state.comments && this.state.comments.length > 1 ? this.state.commentList.map(comment => <h3 key={comment.id}>{comment}</h3>)
          : <h3 >{this.props.comments}</h3>}
          <img src={this.props.photos} width='200px'/>
        </div>

      </div>
    );
  }

}
// {this.state.selected && this.mappedComments.map(comment=><h3>{comment}</h3>)}
export default withRouter(Reception);
