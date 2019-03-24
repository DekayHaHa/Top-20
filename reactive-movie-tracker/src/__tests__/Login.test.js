import React from 'react';
import { shallow } from "enzyme";
import Login from '../containers/Login'


describe("Login", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Login />);
	});


	it("should match the snapshot with all data passed in correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

});