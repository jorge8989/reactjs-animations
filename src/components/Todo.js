import React from 'react';

const Todo = React.createClass({
  render: function() {
    const todoStyle = {
      color: this.props.completed ? 'green' : 'red',
      cursor: 'pointer'
    } 
    return (
        <tr>
          <td style={todoStyle}>{this.props.text}</td>
        </tr>
    )  
  }
})

export default Todo;
