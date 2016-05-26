import React from 'react';

const Todo = React.createClass({
  handleToggle: function() {
    this.props.toggleTodo(this.props.id)
  },
  handleDelete: function() {
    this.props.deleteTodo(this.props.id)
  },
  render: function() {
    const handleToggle = this.handleToggle
    const handleDelete = this.handleDelete
    const todoStyle = {
      color: this.props.completed ? 'green' : 'red',
      cursor: 'pointer'
    } 
    return (
        <tr>
          <td style={todoStyle} onClick={() => { handleToggle() } }>
            {this.props.text}
          </td>
          <td>
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger" 
              onClick={ () => { handleDelete() } }
            >
              Delete
            </button>
          </td>
        </tr>
    )  
  }
})

export default Todo;
