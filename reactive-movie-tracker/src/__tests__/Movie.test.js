import React from 'react';
import { shallow } from "enzyme";
import { Movie, mapDispatchToProps, mapStateToProps } from '../containers/Movie'
import { mockReduxFavs, mockReduxMovies, mockReduxUser, mockReduxNewMovies} from '../utilities/mockTestData'
import { addMovies } from '../actions/index'
import { handleFavorite } from '../Thunks/handleFavorite'
import { updateFavs } from '../Thunks/updateFavs'

jest.mock('../Thunks/handleFavorite')
jest.mock('../Thunks/updateFavs')


const mockFunc = jest.fn()
describe("Movie", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Movie 
			addMovies={mockFunc}
			movies={mockReduxMovies}
			activeUser={mockReduxUser}
			favorites={mockReduxFavs}
		/>);
	});

	it("should match the snapshot with all data passed in correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it.skip("should add movie to favorites", () => {
		//setup
		//execution
		//expectation
	});
	it.skip("should retireve all favorites", () => {
		//setup
		//execution
		//expectation
	});
	it.skip("should delete a movie from favorites", () => {
		//setup
		//execution
		//expectation
	});
	
	it("should map state to props", () => {
		//setup
		const mockStore = {
			activeUser: { name: 'steve', id: 2 },
			movies: ['should show'],
			favorites: ['should show'],
			bogus: 'value'
		}
		const expected = {
			activeUser: { name: 'steve', id: 2 },
			movies: ['should show'],
		}
		//execution
		const mappedProps = mapStateToProps(mockStore)
		//expectation
		expect(mappedProps).toEqual(expected)
	});
	it.skip("should map updateFavs to props", () => {
		//setup
		const mockDispatch = jest.fn()
		const actionToDispatch = updateFavs(2, ['movies'])
		//execution
		const mappedProps = mapDispatchToProps(mockDispatch)
		mappedProps.updateFavs(2, ['movies'])
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
	it("should map handleFavorite to props", () => {
		//setup
		const mockDispatch = jest.fn()
		const actionToDispatch = handleFavorite()
		//execution
		const mappedProps = mapDispatchToProps(mockDispatch)
		mappedProps.handleFavorite()
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
});