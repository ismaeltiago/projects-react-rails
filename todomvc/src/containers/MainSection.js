import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'
import { getCompletedTodoCount } from '../selectors'

const mapStateToProps = state => ({
  todos: state.todos,
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
  todos: () => {
    let { fetchTodosSuccess, fetchTodosFailure } = TodoActions
    dispatch(TodoActions.fetchTodos()).payload.then((response) => {
      dispatch(fetchTodosSuccess(response))
    }).catch((error) => {
      dispatch(fetchTodosFailure(error))
    });
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)

