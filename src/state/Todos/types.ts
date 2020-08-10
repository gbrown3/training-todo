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

export type TodoActionTypes = AddTodoAction;

// Repeat for other action types (remove, toggle)

// TODO: next time, create an aggregate action type to use in reducer
