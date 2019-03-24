import React from 'react';
import { shallow } from "enzyme";
import PageNotFound from '../containers/PageNotFound'


describe("PageNotFound", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<PageNotFound />);
	});


	it("should match the snapshot with all data passed in correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

});