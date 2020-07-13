import { Todo } from '../TodoList/TodoList.interface';
import { ChangeEvent, MouseEvent } from 'react';

export interface TodoItemProps {
  todo: Todo,
  index: number,
  onCheckChangeHandler: (e: ChangeEvent<HTMLInputElement>, index: number) => void,
  onRemoveClickHandler: (e: MouseEvent, index: number) => void 
}