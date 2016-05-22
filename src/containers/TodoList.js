import React from 'react';
import Todo from '../components/Todo';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TodoList = React.createClass({
  render: function() {
    const items = this.props.items.map((item, i) => {
      return <Todo key={item} item={item}/>
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

export default TodoList;