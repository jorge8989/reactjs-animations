import React from 'react';
import Todo from './Todo';
import _ from 'lodash';

const TodoList = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item, i) {
      return (
        <Todo key={item} item={item}/>
      );
    }.bind(this));
  return (
    <div>
      { items }
    </div>
  )
  }
})

export default TodoList;
