import { HelloAction, HelloActionList } from '../actions';
import { Item } from '../types';

export type HelloState = Item[];

export function helloReducer(state: HelloState = [], action: HelloAction): Item[] {
  switch (action.type) {
    case HelloActionList.Add:
      return [...state, { id: state.length, text: action.text }];
    case HelloActionList.Clear:
      return [];
    default:
      return state;
  }
}
