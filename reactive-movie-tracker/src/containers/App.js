import React, { Component } from 'react';
import MovieHolder from './MovieHolder'
import { fetchData } from '../utilities/api'
import {APIkey} from '../utilities/key.js'
import { connect } from 'react-redux'
import { addMovies } from '../actions'

class App extends Component {
  async componentDidMount () {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`
    const response = await fetchData(url)
    this.props.addMovies(response)
  }
  render() {
    return (
      <div className="App">
        <MovieHolder />
      </div>
    );
  }
}
export const mapDispatchtoProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(null, mapDispatchtoProps)(App);
