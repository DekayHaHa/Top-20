import React from 'react';
import { shallow } from "enzyme";
import {App, mapStateToProps, mapDispatchtoProps} from '../containers/App'
import {fetchData} from '../utilities/api'
import { mockReduxFavs, mockReduxMovies, mockReduxUser } from '../utilities/mockTestData'
import { MovieDetails } from '../components/MovieDetails'
import Movie from '../containers/Movie';

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App 
      movies={mockReduxMovies}
      activeUser={mockReduxUser}
      favorites={mockReduxFavs}
    />);
  });


  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should add movie data to state", () => {
    //setup

    //execution 
    wrapper.instance().getMovieData()
    //expectation
  });

  it("should render movie based on id", () => {
    //setup
    const movie = {
      title: 'Spider Man',
      image: 'www.reddit.com',
      overview: 'Big Blue House',
      score: 9,
      id: 123455,
      isFavorite: false,
      releaseDate: "2017-01-03",
    }
    const expected = <MovieDetails {...movie}/>
    //execution 
    const results = wrapper.instance().findMovieToRender(123455)
    //expectation
    expect(results).toEqual(expected)
  });

});