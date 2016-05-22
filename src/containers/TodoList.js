import React from 'react';
import Todo from '../components/Todo';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function mapStateToProps(state) {
  return { todos: state.todos }
}

let TodoList = React.createClass({
  render: function() {
    const items = this.props.todos.map((todo, i) => {
      return <Todo key={todo.text} item={todo.text}/>
    });
  return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} component="tbody">
          { items }
        </ReactCSSTransitionGroup>
      </table>
    )
  }
})

TodoList = connect(
  mapStateToProps
)(TodoList)


export default TodoList;
