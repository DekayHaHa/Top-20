import React, { Component } from "react";
import MovieHolder from "./MovieHolder";
import Favorites from './Favorites'
import { connect } from "react-redux";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import { MovieDetails } from "../components/MovieDetails";
import { PageNotFound } from "../components/PageNotFound";
import PropTypes from "prop-types";
import "../styles/App.scss";
import { getMovies } from '../Thunks/getMovies'

export class App extends Component {
  componentDidMount() {
    this.getMovieData();
  }
  getMovieData = () => {
    this.props.getMovies()
  };
  findMovieToRender = id => {
    const MovieToRender = this.props.movies.find(movie => movie.id === id);
    const movie = <MovieDetails {...MovieToRender} />;
    return MovieToRender ? movie : false;
  };
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Switch>
          <Route exact path="/" component={MovieHolder} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/favorites" component={Favorites} />
          <Route
            exact
            path="/movie/:id"
            render={({ match }) => {
              const movie = this.findMovieToRender(parseInt(match.params.id));
              return movie || <PageNotFound />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  movies: PropTypes.array,
  activeUser: PropTypes.object
};

export const mapStateToProps = state => ({
  movies: state.movies,
  activeUser: state.activeUser
});

export const mapDispatchtoProps = dispatch => ({
  getMovies: (url) => dispatch(getMovies(url))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(App);
