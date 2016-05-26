import React from 'react';

const ActionsSection = ({ editing, handleToggleEdit }) => {
  if ( editing === true ) {
    return (
    <td>
      <button class="btn btn-primary">Save</button>
      <button class="btn btn-default" onClick={ () => handleToggleEdit() }>Cancel</button>
    </td>
    )
  } else {
    return (
      <td>
        <button class="btn btn-primary" onClick={ () => handleToggleEdit() }>Edit</button>
        <button class="btn btn-danger" 
          onClick={ () => { handleDelete() } }
        >
          Delete
        </button>
      </td>
    )
  }
}

const Todo = React.createClass({
  handleToggleEdit: function() {
    this.props.toggleEdit(this.props.id)
  },
  handleToggle: function() {
    this.props.toggleTodo(this.props.id)
  },
  handleDelete: function() {
    this.props.deleteTodo(this.props.id)
  },
  render: function() {
    const handleToggle = this.handleToggle
    const handleDelete = this.handleDelete
    const handleToggleEdit = this.handleToggleEdit
    const todoStyle = {
      color: this.props.completed ? 'green' : 'red',
      cursor: 'pointer'
    } 
    return (
        <tr>
          <td style={todoStyle} onClick={() => { handleToggle() } }>
            {this.props.text}
          </td>
          <ActionsSection editing={this.props.editing} handleToggleEdit={handleToggleEdit}/>
        </tr>
    )  
  }
})

export default Todo;
