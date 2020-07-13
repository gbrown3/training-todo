import { createStore } from "redux";

export default function configureStore(preloadedState) {
  // TODO: set up root reducer
  const store = createStore(rootReducer, preloadedState);
  return store;
}