import React from 'react';
import { TodoListState } from './TodoList.interface';
import { TodoItem } from '../TodoItem/TodoItem';

export default class TodoList extends React.Component<{}, TodoListState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { todos: [{isDone: true, label: 'first todo!'}] };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        {todos.map(todo => {
          return <TodoItem todo={todo} />;
        })}
      </div>
    );
  }
}