import React from 'react';
import { shallow } from "enzyme";
import { Login, mapDispatchtoProps, mapStateToProps} from '../containers/Login'
import { mockReduxFavs, mockReduxMovies, mockReduxUser } from '../utilities/mockTestData'



describe("Login", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Login 
			movies={mockReduxMovies}
			activeUser={mockReduxUser}
			favorites={mockReduxFavs}
		/>);
	});


	it("should match the snapshot with all data passed in correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it.skip("Should add user to back end", () => {
		//setup
		//execution
		//expectation
	});
	it.skip("Should sign in user", () => {
		//setup
		//execution
		//expectation
	});
	it.skip("Should set state to name input", () => {
		//setup
		//execution
		//expectation
	});
	it.skip("Should set state to password input", () => {
		//setup
		//execution
		//expectation
	});
	it.skip("Should set state to email input", () => {
		//setup
		//execution
		//expectation
	});
	it.skip("Should check sign in inputs", () => {
		//setup
		//execution
		//expectation
	});
	it.skip("Should check sign up inputs", () => {
		//setup
		//execution
		//expectation
	});

});