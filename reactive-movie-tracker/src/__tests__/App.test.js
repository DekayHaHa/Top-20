import React from 'react';
import { shallow } from "enzyme";
import App from '../containers/App'


describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });


it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

});