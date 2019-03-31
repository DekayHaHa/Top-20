import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { addMovies } from "../actions/index";
import PropTypes from "prop-types";
import "../styles/MovieHolder.scss";

export class MovieHolder extends Component {
  render() {
    const { movies } = this.props;

    return (
        <div className='movie-holder'>
        {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
        </div>
    );
  }
}

MovieHolder.propTypes = {
  movies: PropTypes.array,
  activeUser: PropTypes.object,
};

export const mapStateToProps = state => ({
  movies: state.movies,
  activeUser: state.activeUser,
});

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieHolder);
