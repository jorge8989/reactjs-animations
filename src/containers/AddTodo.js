import React from 'react';
import {ADD_TODO, addTodo } from '../actions/Actions';
import { connect } from 'react-redux';

let AddTodo = React.createClass({
  handleCreate: function(e) {
    e.preventDefault();
    this.props.createTask(this.refs.text.value)
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (text) => {
      dispatch(addTodo(text))
    }
  }
}

AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddTodo;
