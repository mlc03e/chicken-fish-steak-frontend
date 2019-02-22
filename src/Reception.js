import React, { Component } from 'react';

class Reception extends Component {

  render() {
    return (
      <div className= 'createButtons'>
        <h1> Reception </h1>
        <button>Add Comment</button>
        <br></br>
        <button>Add Photo</button>
        <br></br>
        <div className='receptionBoard'>
          <h1> Board</h1>
        </div>
      </div>
    );
  }

}

export default Reception;
