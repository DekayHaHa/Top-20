import React, { Component } from "react";
import { cleanFavorites} from '../utilities/cleaner'
import Movie from "./Movie";
import { retrieveAllFavorites} from '../utilities/api'
import { connect } from "react-redux";
import { addMovies,addFavorites } from "../actions/index"

class MovieHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFavorites: false,
    };
  }


retrieveAllFavFromAPI = async () => {
  const id = this.props.activeUser.id;
  const url = `http://localhost:3000/api/users/${id}/favorites`;
  let results = await retrieveAllFavorites(url)
  this.props.addFavorites(results)
  this.compareFavorites();
}

  toggleFavorites = () => {
    this.setState({ displayFavorites: this.state.displayFavorites ? false : true})
  };

  compareFavorites = () => {
    // return movies compared against user favorites
    const { movies , favorites} = this.props
  
    const favIds = favorites.map(fav => fav.id)
    const newMovies = movies.map(movie => {
      return favIds.includes(movie.id) ? {...movie, isFavorite: true} : movie
    })
    this.props.addMovies(newMovies)
  }

  render() {
    const { movies, activeUser, favorites } = this.props
    const { displayFavorites } = this.state
    const btnText = displayFavorites ? 'Show All' : 'Display Favorites';
    const moviesToRender = activeUser.id && displayFavorites ? favorites : movies
    {activeUser.id && this.retrieveAllFavFromAPI()}
      return (
        <div>
          <button onClick={this.toggleFavorites}>{btnText}</button>
          {moviesToRender.map(movie => <Movie key={movie.id} {...movie} />)}
        </div>
      );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  activeUser: state.activeUser,
  favorites : state.favorites
});

export const mapDispatchToProps = dispatch => ({
  addMovies: (movies) => dispatch(addMovies(movies)),
  addFavorites: (movies) => dispatch(addFavorites(movies))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieHolder);
