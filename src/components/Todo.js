import React from 'react';

const ActionsSection = ({ editing, handleToggleEdit, handleUpdate }) => {
  if ( editing === true ) {
    return (
    <td>
      <button class="btn btn-primary" onClick={() => handleUpdate() }>Save</button>
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

let editInput;

const TasksSection = ({ completed, editing, text, handleToggle }) => {
  const todoStyle = {
    color: completed ? 'green' : 'red',
    cursor: 'pointer'
  } 
  if ( editing === true ) {
    return (
      <td on>
        <input type="text" defaultValue={ text } ref={(ref) => { editInput = ref }} class="form-control"/>
      </td>
    ) 
  } else {
    return (
      <td style={todoStyle} onClick={() => { handleToggle() } }>
        { text }
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
  handleUpdate: function() {
    this.props.updateTodo(this.props.id, editInput.value )
    this.handleToggleEdit(this.props.id)
  },
  render: function() {
    const handleToggle = this.handleToggle
    const handleDelete = this.handleDelete
    const handleToggleEdit = this.handleToggleEdit
    const handleUpdate = this.handleUpdate
    return (
        <tr>
          <TasksSection editing={this.props.editing} 
           handleToggle={handleToggle} 
           completed={this.props.completed}
           text={this.props.text}
           />
          <ActionsSection editing={this.props.editing} 
           handleToggleEdit={handleToggleEdit}
           handleUpdate={handleUpdate}/>
        </tr>
    )  
  }
})

export default Todo;
