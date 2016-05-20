import React from 'react';

const Todo = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.item}
      </div>
    )  
  }
})

export default Todo;
