import { combineReducers } from 'redux';
import { helloReducer } from './helloReducer';
import { Reducer } from 'react';

// See https://redux.js.org/api/combinereducers for structure
export const rootReducer = combineReducers({
  helloReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
