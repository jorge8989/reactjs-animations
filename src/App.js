import React from 'react';
import { render } from 'react-dom';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  createTask: function(text) {
    var newItems =
      this.state.items.concat([text]);
    this.setState({items: newItems});
  },
  render: function() {
    return(
      <div class="container">
        <div class="col-md-12">
          <h1>Todos App</h1>
          <AddTodo createTask={this.createTask} />
          <TodoList items={this.state.items} />
        </div>
      </div>
    )
  }
});

export default App;
