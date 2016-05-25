import React from 'react';
import Todo from '../components/Todo';
import { connect } from 'react-redux';
import { ADD_TODO, addTodo, TOGGLE_TODO, toggleTodo } from '../actions/Actions';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return { toggleTodo: (id) => {
    dispatch(toggleTodo(id))
    }
  }
}

let TodoList = React.createClass({
  render: function() {
    const todos = this.props.todos.map((todo, i) => {
      return <Todo 
              key={todo.id} 
              id={todo.id}
              text={todo.text} 
              completed={todo.completed}
              toggleTodo={this.props.toggleTodo}
              />
    });
  return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} component="tbody">
          { todos }
        </ReactCSSTransitionGroup>
      </table>
    )
  }
})

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default TodoList;
