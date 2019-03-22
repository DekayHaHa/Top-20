import React, { Component } from 'react';
import  MovieHolder  from './MovieHolder'
import { fetchData } from '../utilities/api'
import { APIkey } from '../utilities/key.js'
import { connect } from 'react-redux'
import { addMovies } from '../actions'
import { Header } from './Header'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import { cleanMovies } from '../utilities/cleaner'
import { MovieDetails } from '../components/MovieDetails'
import { PageNotFound } from '../components/PageNotFound'


class App extends Component {
  componentDidMount () {
    this.getMovieData()
  }
  getMovieData = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`
    const response = await fetchData(url)
    const finalData = cleanMovies(response.results)
    this.props.addMovies(finalData)
    console.log(response)
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Route path='/' component={Header}/>
        <Switch>
        <Route exact path='*' component={PageNotFound}/>
        <Route exact path='/' component={MovieHolder}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/movie/:id' render={({match}) => {
          const MovieToRender = this.props.movies.find(movie => movie.id === parseInt(match.params.id))
          return <MovieDetails {...MovieToRender}/>
        }}/>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchtoProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchtoProps)(App);
