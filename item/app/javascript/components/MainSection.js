import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import { getCompletedTodoCount } from '../selectors'

import { fetchTodos } from '../actions/index';

class MainSection extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  render() {
    const { todosCount, completedCount, actions, todos } = this.props;
    return (
      <section className="main">
        {
          !!todosCount && 
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={completedCount === todosCount}
            />
            <label onClick={actions.completeAllTodos}/>
          </span>
        }
        <VisibleTodoList todos={todos}/>
        {
          !!todosCount &&
          <Footer
            completedCount={completedCount}
            activeCount={todosCount - completedCount}
            onClearCompleted={actions.clearCompleted}
          />
        }
      </section>
    );
  }
}

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection)

// export default MainSection;