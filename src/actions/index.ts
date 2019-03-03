// See https://redux.js.org/recipes/usage-with-typescript#type-checking-actions-action-creators
// Actions
export type HelloAction = AddHello | ClearHello;

export enum HelloActionList {
  Add = 'ADD_HELLO',
  Clear = 'CLEAR_HELLO',
}

interface AddHello {
  type: typeof HelloActionList.Add;
  text: string;
}

interface ClearHello {
  type: typeof HelloActionList.Clear;
}

// Action creators
export function addHello(text: string): AddHello {
  return { type: HelloActionList.Add, text };
}

export function clearHello(): ClearHello {
  return { type: HelloActionList.Clear };
}
