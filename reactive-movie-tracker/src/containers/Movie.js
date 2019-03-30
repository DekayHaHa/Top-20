import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addMovies } from "../actions";
import PropTypes from "prop-types";
import "../styles/Movie.scss";
import {buttonSVG} from '../utilities/buttonSVG'

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

  render() {
    const { id, image, isFavorite, activeUser } = this.props;
    let methodToggle;
    let color;
    if (isFavorite) {
      methodToggle = this.deleteFromFavorites;
      color = '#ffd700'
    } else {
      methodToggle = this.addToFavorites;
      color = '#808080'
    }
    const favBtn = (
      <button className={`favorite-btn ${isFavorite}`} onClick={methodToggle}>{buttonSVG(color)}</button>
    );
    const redirectBtn = (
      <Link to="/login">
        <button className={`favorite-btn ${isFavorite}`}>{buttonSVG(color)}</button>
      </Link>
    );
    const movieButton = activeUser.id ? favBtn : redirectBtn;
    return (
      <div className='movie'>
        {movieButton}
        <div>
          <Link to={`/movie/${id}`}>
            <img alt="movie poster" src={image} />
          </Link>
        </div>
      </div>
    );
  }
};

Movie.propTypes = {
  movies: PropTypes.array,
  activeUser: PropTypes.object,
};

export const mapStateToProps = state => ({
  movies: state.movies,
  activeUser: state.activeUser,
});

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
