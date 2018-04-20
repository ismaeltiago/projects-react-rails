import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from '../reducers'
import 'todomvc-app-css/index.css'
import thunk from 'redux-thunk';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

class Index extends Component {
  render() {
    return (
      <div className="todoapp" id="root">
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    )
  }
}

export default Index
