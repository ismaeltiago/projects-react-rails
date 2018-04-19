import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'
import { getCompletedTodoCount } from '../selectors'

import { fetchTodos, fetchTodosSuccess } from '../actions/index';

const mapStateToProps = state => ({
  todos: state.todos,
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
  todos: () => {
    dispatch(fetchTodos()).then((response) => {
      !response.error ? dispatch(fetchTodosSuccess(response.payload.data)) : dispatch(fetchPostsFailure(response.payload.data));
    });
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)

