import React, { FormEvent, ChangeEvent } from 'react';
import TodoList from '../TodoList/TodoList';
import { TodoInput } from '../TodoInput/TodoInput';

export interface Todos {
  isDone: boolean,
  label: string
}


export class TodoContainer extends React.Component<{}, {todos: Todos[]}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { todos: [] };
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheckChangeHandler = this.onCheckChangeHandler.bind(this);
  }

  onSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const label = form['todo-title'].value;
    this.setState({
      todos: [...this.state.todos, {isDone: false, label}]
    });
  }

  onCheckChangeHandler(e: ChangeEvent<HTMLInputElement>, todoIndex: number) {
    //this.setState({ newTodo: e.target.value });
    //this.state.todos[todoIndex]
    // eslint-disable-next-line no-console
    console.log(e);
  }

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todos} onCheckChangeHandler={this.onCheckChangeHandler}></TodoList>
        <TodoInput onSubmit={this.onSubmit}></TodoInput>
      </div>
    );
  }
}