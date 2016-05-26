import React from 'react';
import Todo from '../components/Todo';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, toggleEdit } from '../actions/Actions';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return { 
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    },
    toggleEdit: (id) => {
      dispatch(toggleEdit(id))
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
              editing={todo.editing} 
              completed={todo.completed}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              toggleEdit={this.props.toggleEdit}
              />
    });
  return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
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
