import React, { Component } from 'react';
// import ReactDOM from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Modal from './Modal'

class Reception extends Component {

  state= {
    receptions: [],
    selectedReception: null
  }

  componentDidMount() {
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

  showReceptionDetails=(receptionId) => {
    // const foundReception = this.state.receptions.find(reception => receptionId === reception.id)
    const clickedReception= this.state.receptions.map(reception=> {
      if (receptionId === reception.id) {
        reception.selected = !reception.selected
        return reception
      } else {
        return reception
      }
    })
    this.setState({selectedReception: clickedReception})
    // console.log(clickedReception)
    }


  render() {

    // const mappedComments= this.state.receptions.map(reception => reception.comments)
    // const mappedPhotos= this.state.receptions.map(reception => reception.photos)
    const filteredSelected= this.state.receptions.filter(reception => reception.selected)
    // console.log(filteredSelected.map(reception => reception.comments.map(comment => comment.content)))
    return (
      <div className='reception'>
        <div className= 'createButtons'>
          <button onClick={this.props.addComment}>Add Comment</button>
          <br></br>
          <button onClick={this.props.addPhoto}>Add Photo</button>
        </div>
        <div className='guestList'>
          <h2>Choose Reception</h2>
          {this.state.receptions.map(reception => <h3 key={reception.id} onClick={()=>this.showReceptionDetails(reception.id)}>{reception.name}</h3>)}
        </div>
        <div className='receptionBoard'>
          {this.state.selectedReception ? filteredSelected.map(reception => <h1 key={reception.id}>{reception.name}</h1> ) : <h1>Reception</h1>}
          {this.state.selectedReception && filteredSelected.map(reception => reception.comments.map(comment => <h3 key={comment.id}>{comment.content}</h3>)) }
          {this.state.selectedReception && filteredSelected.map(reception=> reception.photos.map(photo=> <img key={photo.id} src={photo.image}/>))}
        </div>

      </div>
    );
  }

}
// {this.state.selected && this.mappedComments.map(comment=><h3>{comment}</h3>)}
export default withRouter(Reception);
