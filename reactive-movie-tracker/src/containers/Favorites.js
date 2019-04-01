import React, { Component } from 'react'
import Movie from "./Movie";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../styles/MovieHolder.scss";
import {addMovies} from '../actions/index'

export class Favorites extends Component {
	
	filterFavorites = () => (this.props.movies.filter(movie => movie.isFavorite))
	
	render () {
		const moviesToRender = this.filterFavorites()
		return (
			<div>
				{moviesToRender.map(movie => (
					<Movie key={movie.id} {...movie} />
				))}
			</div>
		)
	}
}

Favorites.propTypes = {
	movies: PropTypes.array,
	activeUser: PropTypes.object,
	favorites: PropTypes.array
};

export const mapStateToProps = state => ({
	movies: state.movies,
	activeUser: state.activeUser,
	favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
	addMovies: movies => dispatch(addMovies(movies))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Favorites);