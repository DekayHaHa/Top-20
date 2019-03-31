import React, { Component } from 'react'
import Movie from "./Movie";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../styles/MovieHolder.scss";
import {addMovies} from '../actions/index'
import { retrieveFavoritesIds} from '../utilities/api'

export class Favorites extends Component {

  retrieveAllFavFromAPI = async () => {
    const { activeUser } = this.props;
    const id = activeUser.id;
		let results = await retrieveFavoritesIds(id);
		console.log(results)
    // await this.compareFavorites(results);
    // await this.props.addFavorites(results);
  };

  // compareFavorites = favorites => {
  //   const { movies } = this.props;
  //   const favIds = favorites.map(fav => fav.id);
  //   const newMovies = movies.map(movie => {
  //     return favIds.includes(movie.id)
  //       ? { ...movie, isFavorite: true }
  //       : { ...movie, isFavorite: false };
  //   });
  //   this.props.addMovies(newMovies);
  // };

  // componentDidMount() {
  //   this.props.activeUser.id && this.retrieveAllFavFromAPI();
	// }
	
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