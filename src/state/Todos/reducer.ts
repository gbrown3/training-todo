import { TodoActionTypes, TodosActionType } from './types';

// TODO: move to types file
export interface Todo {
  isDone: boolean;
  label: string;
}

// TODO: move to types file
export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = { todos: [] };

// In real app: set up action types, then set up an overarching action type for this specific reducer
export default function todosReducer(state = initialState, action: TodoActionTypes) {
  switch(action.type) {
    case TodosActionType.ADD_TODO:
      return {
        ...state,
        todos: [ ...state.todos, action.payload ]
      };
    case TodosActionType.REMOVE_TODO: {
      const newTodos = {
        ...state,
        todos: [...state.todos]
      };      
      newTodos.todos.splice(action.payload.index, 1);

      return newTodos;
    }
    case TodosActionType.TOGGLE_TODO: {
      const newTodos = {
        ...state,
        todos: [...state.todos]
      };      
      const oldIsDone = newTodos.todos[action.payload.index].isDone;
      newTodos.todos[action.payload.index].isDone = !oldIsDone;

      return newTodos;
    }
    default:
      return state;  
  }
}
