import { AddTodoAction } from './types';

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
export default function todosReducer(state = initialState, action: AddTodoAction) {
  switch(action.type) {
    case 'ADD_TODO':
      // Payload = Todo
      return {
        ...state,
        todos: [ ...state.todos, action.payload ]
      };
    case 'REMOVE_TODO': {
      // Payload = index of todo to remove
      const newTodos = {
        ...state,
        todos: [...state.todos]
      };      
      newTodos.todos.splice(action.payload, 1);

      return newTodos;
    }
    case 'TOGGLE_TODO': {
      // Payload = index of todo to remove
      const newTodos = {
        ...state,
        todos: [...state.todos]
      };      
      const oldIsDone = newTodos.todos[action.payload].isDone;
      newTodos.todos[action.payload].isDone = !oldIsDone;

      return newTodos;
    }
    default:
      return state;  
  }
}
