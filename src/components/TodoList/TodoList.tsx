import React, { ChangeEvent, MouseEvent } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Todos } from '../TodoContainer/TodoContainer';

export default class TodoList extends React.Component<{todoList: Todos[], onCheckChangeHandler: (e: ChangeEvent<HTMLInputElement>, index: number) => void, onRemoveClickHandler: (e: MouseEvent, index: number) => void }> {
  
  render() {
    const { todoList, onCheckChangeHandler, onRemoveClickHandler } = this.props;
    return (
      <div>
        {todoList.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              index={index}
              key={`${todo.label}-${index}`}
              onCheckChangeHandler={onCheckChangeHandler}
              onRemoveClickHandler={onRemoveClickHandler}
            />
          );
        })}
      </div>
    );
  }
}