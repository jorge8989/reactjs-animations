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
      <form onSubmit={(e) => { handleCreate(e) }} class="form-inline">
        <div class="form-group">
          <input type="text" class="form-control" ref="text"/>
          <input type="submit" value="Add" class="btn btn-primary"/>
        </div>
      </form>
    )
  }
})
export default AddTodo;
