import { AnyAction } from 'redux';
import { Todo } from './reducer';

export enum TodosActionType {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface AddTodoAction extends AnyAction {
  type: TodosActionType.ADD_TODO,
  payload: Todo
}
export interface RemoveTodoAction extends AnyAction {
  type: TodosActionType.REMOVE_TODO,
  payload: {index: number}
}
export interface ToggleTodoAction extends AnyAction {
  type: TodosActionType.TOGGLE_TODO,
  payload: {index: number}
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction | ToggleTodoAction;
