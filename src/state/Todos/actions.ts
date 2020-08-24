import { Todo } from "../../components/TodoList/TodoList.interface";
import { AddTodoAction, RemoveTodoAction, ToggleTodoAction, TodosActionType } from "./types";

export function createAddTodoAction(payload: Todo): AddTodoAction {
  return {
    type: TodosActionType.ADD_TODO,
    payload
  };
}
export function createRemoveTodoAction(index: number): RemoveTodoAction {
  return {
    type: TodosActionType.REMOVE_TODO,
    payload: {index}
  };
}
export function createToggleTodoAction(index: number): ToggleTodoAction {
  return {
    type: TodosActionType.TOGGLE_TODO,
    payload: {index}
  };
}