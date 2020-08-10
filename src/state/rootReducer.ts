import { combineReducers } from "redux";

import todos from "./Todos/reducer";

export const rootReducer = combineReducers(
  {
    todos
  }
);
