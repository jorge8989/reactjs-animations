import React from 'react';

const Todo = React.createClass({
  render: function() {
    return (
        <tr>
          <td>{this.props.item}</td>
        </tr>
    )  
  }
})

export default Todo;
