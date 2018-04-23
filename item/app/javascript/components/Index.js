import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../containers/App'
import reducer from '../reducers'
import 'todomvc-app-css/index.css'

const store = createStore(reducer, { todos: [] })

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
