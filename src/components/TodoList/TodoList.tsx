import React from 'react'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        {todos.map(todo => {
          return <TodoItem todo={todo} />;
        })}
      </div>
    )
  }
}