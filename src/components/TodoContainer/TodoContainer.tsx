/* eslint-disable no-console */
import React, { FormEvent, ChangeEvent, MouseEvent } from 'react';
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
    this.onRemoveClickHandler = this.onRemoveClickHandler.bind(this);
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
    const newTodos = [ ...this.state.todos ];
    const {label, isDone} = newTodos[todoIndex];

    newTodos[todoIndex] = {
      label,
      isDone: !isDone
    };
    this.setState({
      todos: newTodos
    });
  }

  onRemoveClickHandler(e: MouseEvent, todoIndex: number) {
    const newTodos = [ ...this.state.todos ];
    newTodos.splice(todoIndex, 1);

    console.log("Index to remove: ", todoIndex);
    console.log("Old todos: ", [ ...this.state.todos ]);
    console.log("New todos after removal: ", newTodos);


    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <TodoInput onSubmit={this.onSubmit}></TodoInput>
        <TodoList
          todoList={this.state.todos}
          onRemoveClickHandler={this.onRemoveClickHandler}
          onCheckChangeHandler={this.onCheckChangeHandler}
        ></TodoList>
      </div>
    );
  }
}