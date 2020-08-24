import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { initialState as initialTodosState , TodosState} from "./Todos/reducer";

export interface StoreState {
  todoList: TodosState;
}

const initialStoreState: StoreState = {
  todoList: initialTodosState
};


export default function configureStore(preloadedState = initialStoreState) {
  const store = createStore(rootReducer, preloadedState);
  return store;
}