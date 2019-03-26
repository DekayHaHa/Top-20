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
		wrapper.find('.signIn-btn').simulate('click')
		wrapper.update()
		wrapper.find('input.name-input').simulate('change', { target: { value: 'Hey' } });
		//expectation
		expect(wrapper.state('name')).toEqual('Hey')
	});
	it("Should set state to password input", () => {
		//setup
		//execution
		wrapper.find('input.password-input').simulate('change', { target: { value: 'Hey' } });
		//expectation
		expect(wrapper.state('password')).toEqual('Hey')
	});
	it("Should set state to email input", () => {
		//setup
		//execution
		wrapper.find('input.email-input').simulate('change', { target: { value: 'Hey' } });
		//expectation
		expect(wrapper.state('email')).toEqual('Hey')
	});
	it("Should check sign in inputs", () => {
		//setup
		expect(wrapper.instance().signInInputs()).toEqual(true)
		const mockInputs = {email: 'hey', password: 'hey', name: 'hey'}
		//execution
		wrapper.instance().setState(mockInputs)
		//expectation
		expect(wrapper.instance().signInInputs()).toEqual(false)

	});
	it("Should check sign up inputs", () => {
		//setup
		expect(wrapper.instance().signUpInputs()).toEqual(true)
		const mockInputs = { email: 'hey', password: 'hey', name: 'hey' }
		//execution
		wrapper.instance().setState(mockInputs)
		//expectation
		expect(wrapper.instance().signUpInputs()).toEqual(false)
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