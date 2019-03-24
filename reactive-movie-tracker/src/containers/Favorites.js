import React, { Component } from "react";
import { cleanFavorites} from '../utilities/cleaner'
import Movie from "./Movie";
import { connect } from "react-redux";
import { retrieveAllFavorites} from '../utilities/api'
import { addMovies, addFavorites } from "../actions/index"


class Favorites extends Component {


}

export const mapStateToProps = state => ({
  movies: state.movies,
  activeUser: state.activeUser,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  addMovies: (movies) => dispatch(addMovies(movies)),
  addFavorites: (movie) => dispatch(addFavorites(movie))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
