import { signInReducer } from '../reducers/userReducer';
import * as actions from '../actions';

describe('signInReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = signInReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with a new user', () => {
    const id = 1;
    const name = "Tom"
    const expected = {id: 1, name:"Tom"}
    const result = signInReducer( {}, actions.signInUser(id, name));
    expect(result).toEqual(expected);
});
});