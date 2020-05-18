// TODO: move to more central place
export interface Todo {
  isDone: boolean,
  label: string
}

export interface TodoListState {
  todos: Todo[]
}