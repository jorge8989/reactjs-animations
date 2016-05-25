import React from 'react';

const Todo = React.createClass({
  handleToggle: function() {
    this.props.toggleTodo(this.props.id)
  },
  render: function() {
    const handleToggle = this.handleToggle
    const todoStyle = {
      color: this.props.completed ? 'green' : 'red',
      cursor: 'pointer'
    } 
    return (
        <tr>
          <td style={todoStyle} onClick={() => { handleToggle() } }>
            {this.props.text}
          </td>
        </tr>
    )  
  }
})

export default Todo;
