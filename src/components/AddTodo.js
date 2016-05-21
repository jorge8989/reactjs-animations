import React from 'react';

const AddTodo = React.createClass({
  handleCreate: function(e) {
    e.preventDefault();
    this.props.createTask(this.refs.text.value);
    this.refs.text.value = '';
    this.refs.text.focus();
  },
  render: function() {
    const handleCreate = this.handleCreate
    
    return (
      <form onSubmit={(e) => { handleCreate(e) }}>
        <input type="text" ref="text"/><input type="submit" value="Add"/>
      </form>
    )
  }
})
export default AddTodo;
