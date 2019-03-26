import React from 'react';
import { shallow } from "enzyme";
import {App, mapStateToProps, mapDispatchtoProps} from '../containers/App'
import {fetchData} from '../utilities/api'
import { mockReduxFavs, mockReduxMovies, mockReduxUser } from '../utilities/mockTestData'
import { MovieDetails } from '../components/MovieDetails'
import Movie from '../containers/Movie';
import { cleanMovies } from '../utilities/cleaner'
import { addMovies } from '../actions/index'
jest.mock('../utilities/api');
jest.mock('../utilities/cleaner');

describe("App", () => {
  let wrapper;
  const mockFunc = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<App 
      addMovies={mockFunc}
      movies={mockReduxMovies}
      activeUser={mockReduxUser}
      favorites={mockReduxFavs}
    />);
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call fetch data", async () => {
    //setup
    fetchData.mockImplementationOnce(() => ({results: mockReduxMovies}))
    //execution 
    await wrapper.instance().getMovieData()
    //expectation
    expect(fetchData).toBeCalled()
  });

  it("should call cleanMovies", () => {
    //setup
    cleanMovies.mockImplementationOnce(() => mockReduxMovies)
    //execution 
    wrapper.instance().getMovieData()
    //expectation
    expect(cleanMovies).toBeCalled()
  });

  it("should call addMovies on props", () => {
    //setup
    //execution 
    wrapper.instance().getMovieData()
    //expectation
    expect(wrapper.instance().props.addMovies).toBeCalled()
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
  it("should map state to props", () => {
    //setup
    const mockStore = {
      activeUser: { name: 'steve', id: 2 },
      movies: ['should show'],
      favorites: ['should not show']
    }
    const expected = {
      activeUser: { name: 'steve', id: 2 },
      movies: ['should show'],      
    }
    //execution
    const mappedProps = mapStateToProps(mockStore)
    //expectation
    expect(mappedProps).toEqual(expected)
  });
  it("should map dispatch to props", () => {
    //setup
    const mockDispatch = jest.fn()
    const actionToDispatch = addMovies(['movies'])
    //execution
    const mappedProps = mapDispatchtoProps(mockDispatch)
    mappedProps.addMovies(['movies'])
    //expectation
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});