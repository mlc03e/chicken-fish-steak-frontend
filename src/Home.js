import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactDOM from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";




class Home extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
      <Router>
        <>
        {this.props.beef}
          <button onClick={() => this.props.makeJi('Ji')}>Make Ji</button>
            <div className='createReception'>
              <img src="https://icons-for-free.com/free-icons/png/512/2199097.png" width= '200px'/>
              <Link to="/create" >Create Reception</Link>
            </div>

            <div className='goToReception'>
              <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nAhBDkmOadq89UiJWOoJPtvss0ZP_rx2EuBoBMZhh-bu0UjMmg' width= '200px'/>
              <Link to="/reception">Go to Reception</Link>
            </div>
          </>
        </Router>
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


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))
