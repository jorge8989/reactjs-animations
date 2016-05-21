import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
  handleRemove: function(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    return(
      <div>
        <AddTodo createTask={this.createTask} />
        <TodoList items={this.state.items} />
      </div>
    )
  }
});

export default App;
