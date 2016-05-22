import React from 'react';
import { render } from 'react-dom';
import Todo from './components/Todo';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';

const App = React.createClass({
  render: function() {
    return(
      <div class="container">
        <div class="col-md-12">
          <h1>Todos App</h1>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    )
  }
});

export default App;
