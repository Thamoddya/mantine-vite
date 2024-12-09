import { combineReducers, Reducer, UnknownAction } from "@reduxjs/toolkit";
import app, { AppState } from "./slices/app";
import auth, { AuthState } from "./slices/auth";

export type RootState = {
  auth: AuthState;
  app: AppState;
};

export interface AsyncReducers {
  [key: string]: Reducer<any, UnknownAction>;
}

const staticReducers = {
  auth,
  app,
};

const rootReducer =
  (asyncReducers?: AsyncReducers) =>
  (state: RootState, actions: UnknownAction) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    });
    return combinedReducer(state, actions);
  };

export default rootReducer;
