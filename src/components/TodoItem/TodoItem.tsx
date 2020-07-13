import React from 'react';
import { TodoItemProps } from './TodoItem.interface';

export const TodoItem: React.FC<TodoItemProps> = ({ todo, index, onCheckChangeHandler, onRemoveClickHandler }) => {

  return (
    <div>
      <input type='checkbox' checked={todo.isDone} onChange={(e) => onCheckChangeHandler(e, index)}></input>
      <label>{todo.label}</label>
      <button onClick={(e) => onRemoveClickHandler(e, index)}>X</button>
    </div>
  );
};