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
					return (
						<div key={movie.id}>
							<Link to={`/movie/${movie.id}`}><Movie {...movie}/></Link>
							<button>Favorite</button>
						</div>
					)
				})}
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps,null)(MovieHolder);
