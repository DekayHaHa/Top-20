import React from 'react';
import { shallow } from "enzyme";
import { MovieHolder, mapDispatchToProps, mapStateToProps } from '../containers/MovieHolder'
import { mockReduxFavs, mockReduxMovies, mockReduxUser, mockReduxNewMovies } from '../utilities/mockTestData'
import { addMovies } from '../actions/index'



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
});