import { favoritesReducer } from '../reducers/favoritesReducer';
import * as actions from '../actions';

describe('favoritesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with new favorites', () => {
    const expected = [{title: 'Aquaman', id: 1, movie_id: 1}, {title: 'Beauty and the Beast', id: 2, movie_id: 2}];
    const result = favoritesReducer([], actions.addFavorites(expected));
    expect(result).toEqual(expected);
});
});