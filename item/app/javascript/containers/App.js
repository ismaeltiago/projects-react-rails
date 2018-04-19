import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'
import { fetchTodos, fetchTodosSuccess } from '../actions/index';

const App = ({todos, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos.todosList
})

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => {
    dispatch(fetchTodos()).then((response) => {
      !response.error ? dispatch(fetchTodosSuccess(response.payload.data)) : dispatch(fetchPostsFailure(response.payload.data));
    });
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
