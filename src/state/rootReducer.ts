import { combineReducers } from "redux";

import todoList from "./Todos/reducer";

export const rootReducer = combineReducers(
  {
    todoList
  }
);
