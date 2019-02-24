import React, { Component } from 'react';

class Reception extends Component {


  render() {
    
    return (
      <>
        <div className= 'createButtons'>
          <button onClick={this.props.addComment}>Add Comment</button>
          <br></br>
          <button onClick={this.props.addPhoto}>Add Photo</button>
        </div>
        <div className='sampleBoard'>
          <h1> Board</h1>
        </div>

      </>
    );
  }

}

export default Reception;
