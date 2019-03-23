import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
    const data = await response.json();
    
  };

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
    const data = await response.json();
    
  };


  render() {
		const { id, title, image } = this.props;

    return (
      <div>
        <Link to={`/movie/${id}`}>
          <h1>{title}</h1>
          <img alt="movie poster" src={image} />
        </Link>
        <button onClick={this.addToFavorites}>Favorite</button>
        <button onClick={this.deleteFromFavorites}>Unfavorite</button>
      </div>
    );
  }
};

export const mapStateToProps = state => ({
  movies: state.movies,
  activeUser: state.activeUser
});

export default connect(
  mapStateToProps,
  null
)(Movie);
