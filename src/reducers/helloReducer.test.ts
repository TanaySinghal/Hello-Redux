import { helloReducer } from './helloReducer';
import { HelloActionList } from '../actions';
describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(helloReducer(undefined, {} as any)).toEqual([]);
  });

  it('should add hello', () => {
    expect(
      helloReducer([], {
        type: HelloActionList.Add,
        text: 'I have been added!',
      })
    ).toEqual([
      {
        text: 'I have been added!',
        id: 0,
      },
    ]);
  });

  it('should delete hello', () => {
    expect(
      helloReducer([], {
        type: HelloActionList.Clear,
      })
    ).toEqual([]);
  });
});
