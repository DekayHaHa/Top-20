import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Movie } from "./Movie";
import { connect } from 'react-redux';

class MovieHolder extends Component {
	displayMovie = () => {

	}
  render() {
    return (
      <div>
        <h1>I'm the holder</h1>
        {this.props.movies.map(movie => {
					return <Link to={`/movie/${movie.id}`} key={movie.id}><Movie {...movie}/></Link>
				})}
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps,null)(MovieHolder);
