import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Movie } from "./Movie";
import { connect } from 'react-redux';
import { addMovies } from '../actions'


class MovieHolder extends Component {

  render() {
		console.log(this.props)
    return (
      <div>
        <h1>I'm the holder</h1>
        `
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps,null)(MovieHolder);
