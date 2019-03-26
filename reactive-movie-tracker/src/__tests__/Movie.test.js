import React from 'react';
import { shallow } from "enzyme";
import { Movie, mapDispatchToProps, mapStateToProps } from '../containers/Movie'
import { mockReduxFavs, mockReduxMovies, mockReduxUser, mockReduxNewMovies} from '../utilities/mockTestData'


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