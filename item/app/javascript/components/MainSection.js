import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

class MainSection extends Component {
  componentWillMount() {
    this.props.todos()
  }

  render() {
    return (
      <section className="main">
        {
          !!this.props.todosCount && 
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={this.props.completedCount === this.props.todosCount}
            />
            <label onClick={this.props.actions.completeAllTodos}/>
          </span>
        }
        <VisibleTodoList />
        {
          !!this.props.todosCount &&
          <Footer
            completedCount={this.props.completedCount}
            activeCount={this.props.todosCount - this.props.completedCount}
            onClearCompleted={this.props.actions.clearCompleted}
          />
        }
      </section>
    )
  }
}

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;