import React from 'react';
import { shallow } from "enzyme";
import { Movie, mapDispatchToProps, mapStateToProps } from '../containers/Movie'
import { mockReduxFavs, mockReduxMovies, mockReduxUser, mockReduxNewMovies} from '../utilities/mockTestData'
import { addMovies, addFavorites } from '../actions/index'


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
	it("should compare favorites and change movies data", () => {
		//setup
		//execution
		wrapper.instance().compareFavorites(mockReduxFavs)
		//expectation
		expect(wrapper.instance().props.addMovies).toBeCalledWith(mockReduxNewMovies)
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
			favorites: ['should show'],
		}
		//execution
		const mappedProps = mapStateToProps(mockStore)
		//expectation
		expect(mappedProps).toEqual(expected)
	});
	it("should map addMovies to props", () => {
		//setup
		const mockDispatch = jest.fn()
		const actionToDispatch = addMovies(['movies'])
		//execution
		const mappedProps = mapDispatchToProps(mockDispatch)
		mappedProps.addMovies(['movies'])
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
	it("should map addFavorites to props", () => {
		//setup
		const mockDispatch = jest.fn()
		const actionToDispatch = addFavorites(['movies'])
		//execution
		const mappedProps = mapDispatchToProps(mockDispatch)
		mappedProps.addFavorites(['movies'])
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
});