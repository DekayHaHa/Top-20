import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, addMovies } from "../actions";
import { retrieveAllFavorites } from "../utilities/api"

const Movie = class extends Component {
  addToFavorites = async () => {
    const url = "http://localhost:3000/api/users/favorites/new";
    const movieInfo = {
      movie_id: this.props.id,
      user_id: this.props.activeUser.id,
      title: this.props.title,
      poster_path: this.props.image,
      release_date: this.props.releaseDate,
      vote_average: this.props.score,
      overview: this.props.overview
    };
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(movieInfo),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.props.activeUser.id && await this.retrieveAllFavFromAPI()
    
  };
  retrieveAllFavFromAPI = async () => {
    const { activeUser } = this.props
    const id = activeUser.id;
    const url = `http://localhost:3000/api/users/${id}/favorites`;
    let results = await retrieveAllFavorites(url)
    await this.compareFavorites(results);
    await this.props.addFavorites(results)
  }

  deleteFromFavorites = async () => {
    const user_id = this.props.activeUser.id;
    const movie_id = this.props.id;
    const url = `http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`;
    const movieInfo = {
      movie_id: this.props.id,
      user_id: this.props.activeUser.id
    };
    const response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(movieInfo),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.props.activeUser.id && await this.retrieveAllFavFromAPI()
  };

  compareFavorites = (results) => {
    const { movies } = this.props
    const favIds = results.map(fav => fav.id)
    const newMovies = movies.map(movie => {
      return favIds.includes(movie.id) ? { ...movie, isFavorite: true } : {...movie, isFavorite: false}
    })
    this.props.addMovies(newMovies)
  }

  componentDidMount() {
    this.props.activeUser.id && this.retrieveAllFavFromAPI()
  }

  render() {
    const { id, title, image, isFavorite } = this.props;
    let methodToggle;
    let btnVal;
    if (isFavorite) {
      methodToggle = this.deleteFromFavorites
      btnVal = 'Unfavorite'
     } else {
      methodToggle = this.addToFavorites
      btnVal = 'Favorite'
     } 
    return (
      <div>
        <Link to={`/movie/${id}`}>
          <h1>{title}</h1>
          <img alt="movie poster" src={image} />
        </Link>
        <button className={`favorite ${isFavorite}`} onClick={methodToggle}>{btnVal}</button>
      </div>
    );
  }
};

export const mapStateToProps = state => ({
  movies: state.movies,
  activeUser: state.activeUser,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  addFavorites: (movies) => dispatch(addFavorites(movies)),
  addMovies: (movies) => dispatch(addMovies(movies)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
