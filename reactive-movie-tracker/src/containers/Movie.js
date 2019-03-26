import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, addMovies } from "../actions";
import { retrieveAllFavorites } from "../utilities/api";
import PropTypes from "prop-types";
import "../styles/Movie.scss";

export const Movie = class extends Component {
  addToFavorites = async () => {
    const {
      id,
      activeUser,
      title,
      image,
      releaseDate,
      score,
      overview
    } = this.props;

    const url = "http://localhost:3000/api/users/favorites/new";
    const movieInfo = {
      movie_id: id,
      user_id: activeUser.id,
      title: title,
      poster_path: image,
      release_date: releaseDate,
      vote_average: score,
      overview: overview
    };
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(movieInfo),
      headers: {
        "Content-Type": "application/json"
      }
    });
    activeUser.id && (await this.retrieveAllFavFromAPI());
  };
  retrieveAllFavFromAPI = async () => {
    const { activeUser } = this.props;
    const id = activeUser.id;
    const url = `http://localhost:3000/api/users/${id}/favorites`;
    let results = await retrieveAllFavorites(url);
    await this.compareFavorites(results);
    await this.props.addFavorites(results);
  };

  deleteFromFavorites = async () => {
    const { id, activeUser } = this.props;

    const user_id = activeUser.id;
    const movie_id = id;
    const url = `http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`;
    const movieInfo = {
      movie_id: id,
      user_id: activeUser.id
    };
    await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(movieInfo),
      headers: {
        "Content-Type": "application/json"
      }
    });
    activeUser.id && (await this.retrieveAllFavFromAPI());
  };

  compareFavorites = favorites => {
    const { movies } = this.props;
    const favIds = favorites.map(fav => fav.id);
    const newMovies = movies.map(movie => {
      return favIds.includes(movie.id)
        ? { ...movie, isFavorite: true }
        : { ...movie, isFavorite: false };
    });
    this.props.addMovies(newMovies);
  };

  componentDidMount() {
    this.props.activeUser.id && this.retrieveAllFavFromAPI();
  }

  render() {
    const { id, title, image, isFavorite, activeUser } = this.props;
    let methodToggle;
    let btnVal;
    if (isFavorite) {
      methodToggle = this.deleteFromFavorites;
      btnVal = "Unfavorite";
    } else {
      methodToggle = this.addToFavorites;
      btnVal = "Favorite";
    }
    const favBtn = (
      <button className={`favorite ${isFavorite}`} onClick={methodToggle}>
        {btnVal}
      </button>
    );
    const redirectBtn = (
      <Link to="/login">
        <button className={`favorite ${isFavorite}`}>Favorite</button>
      </Link>
    );
    const movieButton = activeUser.id ? favBtn : redirectBtn;
    return (
      <div>
        <Link to={`/movie/${id}`}>
          <h1>{title}</h1>
          <img alt="movie poster" src={image} />
        </Link>
        {movieButton}
      </div>
    );
  }
};

Movie.propTypes = {
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
  addFavorites: movies => dispatch(addFavorites(movies)),
  addMovies: movies => dispatch(addMovies(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
