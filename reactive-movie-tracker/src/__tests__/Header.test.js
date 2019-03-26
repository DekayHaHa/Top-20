import React from 'react';
import { shallow } from "enzyme";
import { Header, mapDispatchtoProps, mapStateToProps } from '../containers/Header'
import { mockReduxFavs, mockReduxMovies, mockReduxUser } from '../utilities/mockTestData'

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