import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";




class Home extends Component {

  render() {
    // console.log(this.props)
    return (
      <div className='home'>

        <div className='home-container'>
          <div className='goToCards'>
            <img id='createIcon' src={require('./pics/create.png')} alt='create'/><br/>
            <Link to="/create" >Create Reception</Link>
          </div>

          <div className='goToCards'>
            <img id='drinks' src={require('./pics/drinks.png')} alt='drinks'/><br/>
            <Link to="/reception">Go to Reception</Link>
          </div>
        </div>



      </div>
    );
  }

}
// {this.props.beef}
//   <button onClick={() => this.props.makeJi('Ji')}>Make Ji</button>
// const mapStateToProps = (state) => {
//   return {
//     beef: state.beef
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     makeJi: (name) => dispatch({type: "MAKE_JI", payload: name})
//   }
// }

//
// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))
export default Home;
