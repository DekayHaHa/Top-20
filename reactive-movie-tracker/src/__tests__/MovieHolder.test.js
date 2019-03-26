import React from 'react';
import { shallow } from "enzyme";
import { MovieHolder } from '../containers/MovieHolder'
import { mockReduxFavs, mockReduxMovies, mockReduxUser, mockReduxNewMovies } from '../utilities/mockTestData'



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
		//execution
		//expectation
	});
	it.skip("should map dispatch to props", () => {
		//setup
		//execution
		//expectation
	});
});