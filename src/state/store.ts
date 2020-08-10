import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { initialState as initialTodosState } from "./Todos/reducer";

const initialStoreState = {
  todos: initialTodosState
};


export default function configureStore(preloadedState = initialStoreState) {
  // TODO: set up root reducer
  const store = createStore(rootReducer, preloadedState);
  return store;
}