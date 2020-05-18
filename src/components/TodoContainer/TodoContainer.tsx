import React, { FormEvent } from 'react';
import TodoList from '../TodoList/TodoList';
import { TodoInput } from '../TodoInput/TodoInput';

export class TodoContainer extends React.Component<{}, {todos: string[]}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { todos: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e: FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(e);

  }

  render() {
    return (
      <div>
        <TodoList></TodoList>
        <TodoInput onSubmit={this.onSubmit}></TodoInput>
      </div>
    );
  }
}