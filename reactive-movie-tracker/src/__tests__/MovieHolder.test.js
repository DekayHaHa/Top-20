import React from 'react';
import { shallow } from "enzyme";
import MovieHolder from '../containers/MovieHolder'


describe("MovieHolder", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<MovieHolder />);
	});

	it("should match the snapshot with all data passed in correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

});