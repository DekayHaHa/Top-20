import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../styles/Movie.scss";
import {buttonSVG} from '../utilities/buttonSVG'
import { handleFavorite } from '../Thunks/handleFavorite'
import { updateFavs } from '../Thunks/updateFavs'

export const Movie = class extends Component {
  addToFavorites = async () => {
    const { id, activeUser, title, image, releaseDate, score, overview, movies,
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
    await this.props.handleFavorite("POST", movieInfo, url)
    await this.props.updateFavs(activeUser.id, movies)
  };

  deleteFromFavorites = async () => {
    const { id, activeUser, movies} = this.props;
    const url = `http://localhost:3000/api/users/${activeUser.id}/favorites/${id}`;
    const movieInfo = {
      movie_id: id,
      user_id: activeUser.id
    };
    await this.props.handleFavorite("DELETE", movieInfo, url)
    await this.props.updateFavs(activeUser.id, movies)
  };

  componentDidMount = () => {
    this.checkFavs()
  }
  checkFavs = () => {
    const { activeUser, updateFavs, movies } = this.props
    activeUser.id && updateFavs(activeUser.id, movies)
  }

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
  handleFavorite: (method, movieInfo, url) => dispatch(handleFavorite(method, movieInfo, url)),
  updateFavs: (id, movies) => dispatch(updateFavs(id, movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
