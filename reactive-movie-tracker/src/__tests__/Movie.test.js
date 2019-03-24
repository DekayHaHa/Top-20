import React from 'react';
import { shallow } from "enzyme";
import Movie from '../containers/Movie'


describe("Movie", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Movie />);
	});


	it("should match the snapshot with all data passed in correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

});