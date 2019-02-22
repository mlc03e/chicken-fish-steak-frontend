import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";

class Create extends Component {

  render() {
    console.log(this.props);
    return (
      <div className= 'createButtons'>
        <h1> Create </h1>
        <button>Invite Guest</button>
        <br></br>
        <button>Add Name and Date</button>
        <br></br>
        <button>Add Comment</button>
        <br></br>
        <button>Add Photo</button>
        <br></br>
        <div className='sampleBoard'>
          <h1>Sample Board</h1>
        </div>
      </div>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    beef: state.beef
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeJi: (name) => dispatch({type: "MAKE_JI", payload: name})
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Create));
