import React from 'react';
import { shallow } from "enzyme";
import { Header, mapDispatchtoProps, mapStateToProps } from '../containers/Header'
import { mockReduxFavs, mockReduxMovies, mockReduxUser } from '../utilities/mockTestData'
import { signInUser, addFavorites } from '../actions/index'

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

	it("should call signInUser & addFavorites", () => {
		//setup
		//execution
		wrapper.instance().clearUserData()
		//expectation
		expect(wrapper.instance().props.signInUser).toBeCalled()
		expect(wrapper.instance().props.addFavorites).toBeCalled()
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
	it("should map signInUser to props", () => {
		//setup
		const mockDispatch = jest.fn()
		const actionToDispatch = signInUser( 2, 'steve')
		//execution
		const mappedProps = mapDispatchtoProps(mockDispatch)
		mappedProps.signInUser( 2, 'steve')
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
	it("should map addFavorites to props", () => {
		//setup
		const mockDispatch = jest.fn()
		const actionToDispatch = addFavorites(['movies'])
		//execution
		const mappedProps = mapDispatchtoProps(mockDispatch)
		mappedProps.addFavorites(['movies'])
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
});