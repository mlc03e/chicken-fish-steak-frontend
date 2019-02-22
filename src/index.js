import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import reducer from './Reducer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


let store = createStore(reducer)

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
serviceWorker.unregister();
