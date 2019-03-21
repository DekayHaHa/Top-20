import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Movie } from "./Movie";
import { connect } from 'react-redux';
import { addMovies } from '../actions'


class MovieHolder extends Component {
	displayMovie = () => {

	}
  render() {
    return (
      <div>
        <h1>I'm the holder</h1>
        {this.props.movies.map(movie => {
					return <Link to={`/${movie.id}`} key={movie.id}><Movie {...movie}/></Link>
				})}
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps,null)(MovieHolder);
