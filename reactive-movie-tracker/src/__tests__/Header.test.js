import React from 'react';
import { shallow } from "enzyme";
import { Header, mapDispatchtoProps, mapStateToProps } from '../containers/Header'
import { mockReduxFavs, mockReduxMovies, mockReduxUser } from '../utilities/mockTestData'
import { signOutUser } from '../actions/index'
import { getMovies } from '../Thunks/getMovies'
jest.mock('../Thunks/getMovies')

describe("Header", () => {
	let wrapper;
	let mockFunc = jest.fn()
	beforeEach(() => {
		wrapper = shallow(<Header
			addFavorites={mockFunc}
			signInUser={mockFunc}
			movies={mockReduxMovies}
			activeUser={mockReduxUser}
			favorites={mockReduxFavs}
			/>);
	});


	it("should match the snapshot with all data passed in correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should map state to props", () => {
		//setup
		const mockStore = {
			activeUser: { name: 'steve', id: 2 },
			movies: ['should not show'],
			favorites: ['should not show']
		}
		const expected = {
			activeUser: { name: 'steve', id: 2 },
		}
		//execution
		const mappedProps = mapStateToProps(mockStore)
		//expectation
		expect(mappedProps).toEqual(expected)
	});
	it("should map signOutUser to props", () => {
		//setup
		const mockDispatch = jest.fn()
		const actionToDispatch = signOutUser()
		//execution
		const mappedProps = mapDispatchtoProps(mockDispatch)
		mappedProps.signOutUser()
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
	
	it("should map getMovies to props", () => {
		//setup
		const mockUrl = 'www.reddit.com'
		const mockDispatch = jest.fn()
		const actionToDispatch = getMovies(mockUrl)
		//execution
		const mappedProps = mapDispatchtoProps(mockDispatch)
		mappedProps.getMovies(mockUrl)
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
});