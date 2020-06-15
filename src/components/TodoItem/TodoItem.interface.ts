import { Todo } from '../TodoList/TodoList.interface';
import { ChangeEvent } from 'react';

export interface TodoItemProps {
  todo: Todo,
  index: number,
  onCheckChangeHandler: (e: ChangeEvent<HTMLInputElement>, index: number) => void
}