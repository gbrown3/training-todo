/* eslint-disable no-console */
import React, { FormEvent, ChangeEvent, MouseEvent } from 'react';
import TodoList from '../TodoList/TodoList';
import { TodoInput } from '../TodoInput/TodoInput';
import { connect } from 'react-redux';
import { StoreState } from '../../state/store';
import { createAddTodoAction, createToggleTodoAction, createRemoveTodoAction } from '../../state/Todos/actions';
import { Dispatch } from 'redux';
import { AddTodoAction, ToggleTodoAction, RemoveTodoAction } from '../../state/Todos/types';

export interface Todos {
  isDone: boolean,
  label: string
}

interface TodoContainerProps {
  todos: Todos[];
  addTodo: (label: string) => AddTodoAction;
  toggleTodo: (index: number) => ToggleTodoAction;
  removeTodo: (index: number) => RemoveTodoAction;
}


export class TodoContainer extends React.Component<TodoContainerProps> {
  constructor(props: TodoContainerProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheckChangeHandler = this.onCheckChangeHandler.bind(this);
    this.onRemoveClickHandler = this.onRemoveClickHandler.bind(this);
  }

  onSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const label = form['todo-title'].value;
    this.props.addTodo(label);
  }

  onCheckChangeHandler(e: ChangeEvent<HTMLInputElement>, todoIndex: number) {
    this.props.toggleTodo(todoIndex);
  }

  onRemoveClickHandler(e: MouseEvent, todoIndex: number) {
    console.log("Index to remove: ", todoIndex);
    console.log("Old todos: ", [ ...this.props.todos ]);

    this.props.removeTodo(todoIndex);
  }

  render() {
    return (
      <div>
        <TodoInput onSubmit={this.onSubmit}></TodoInput>
        <TodoList
          todoList={this.props.todos}
          onRemoveClickHandler={this.onRemoveClickHandler}
          onCheckChangeHandler={this.onCheckChangeHandler}
        ></TodoList>
      </div>
    );
  }
}

// TODO: implement store in components
// state = model used in root reducer
const mapStateToProps = (state: StoreState) => ({
  todos: state.todoList.todos
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (label: string) => dispatch(createAddTodoAction({ isDone: false, label })),
  toggleTodo: (index: number) => dispatch(createToggleTodoAction(index)),
  removeTodo: (index: number) => dispatch(createRemoveTodoAction(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);