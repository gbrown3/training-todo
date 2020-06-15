import React from 'react';
import { TodoItemProps } from './TodoItem.interface';

export class TodoItem extends React.Component<TodoItemProps> {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { index, onCheckChangeHandler } = this.props;

    return (
      <div>
        <input type='checkbox' checked={this.props.todo.isDone} onChange={(e) => onCheckChangeHandler(e, index)}></input>
        <label>{this.props.todo.label}</label>
      </div>
    );
  }
}