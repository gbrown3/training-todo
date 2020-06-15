import React, { ChangeEvent } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Todos } from '../TodoContainer/TodoContainer';

export default class TodoList extends React.Component<{todoList: Todos[], onCheckChangeHandler: (e: ChangeEvent<HTMLInputElement>, index: number) => void}> {
  
  render() {
    const { todoList, onCheckChangeHandler } = this.props;
    return (
      <div>
        {todoList.map((todo, index) => {
          return <TodoItem todo={todo} index={index} key={`${todo.label}-${index}`} onCheckChangeHandler={onCheckChangeHandler}/>;
        })}
      </div>
    );
  }
}