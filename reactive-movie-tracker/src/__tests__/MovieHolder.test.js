import React from 'react';
import { shallow } from "enzyme";
import { MovieHolder, mapDispatchToProps, mapStateToProps } from '../containers/MovieHolder'
import { mockReduxFavs, mockReduxMovies, mockReduxUser } from '../utilities/mockTestData'
// import { addMovies } from '../actions/index'
import { updateFavs } from '../Thunks/updateFavs'
jest.mock('../Thunks/updateFavs')


describe("MovieHolder", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<MovieHolder 
			movies={mockReduxMovies}
			activeUser={mockReduxUser}
			favorites={mockReduxFavs}
		/>);
	});

	it("should match the snapshot with all data passed in correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
	it("should toggle display favorites on click", () => {
		//setup
		expect(wrapper.state('displayFavorites')).toEqual(false)
		//execution
		wrapper.find('.display-favorites').simulate('click')
		//expectation
		expect(wrapper.state('displayFavorites')).toEqual(true)
	});
	it.skip("should map state to props", () => {
		//setup
		const mockStore = {
			activeUser: { name: 'steve', id: 2 },
			movies: ['should show'],
			favorites: ['should not show'],
			bogus: 'value'
		}
		const expected = {
			activeUser: { name: 'steve', id: 2 },
			movies: ['should show'],
		}
		updateFavs = jest.fn()
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
});