import React, { Component } from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addMovies } from "../actions/index";
import PropTypes from "prop-types";
import "../styles/MovieHolder.scss";

export class MovieHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFavorites: false
    };
  }

  toggleFavorites = () => {
    this.setState({
      displayFavorites: this.state.displayFavorites ? false : true
    });
  };

  render() {
    const { movies, activeUser, favorites } = this.props;
    const { displayFavorites } = this.state;
    const btnText = displayFavorites ? "Show All" : "Display Favorites";
    const moviesToRender =
      activeUser.id && displayFavorites ? favorites : movies;
    const userBtn = <button className='display-favorites' onClick={this.toggleFavorites}>{btnText}</button>
    const nonUserBtn = <Link to='/login'><button className="display-favorites">Display Favorites</button></Link>
    return (
      <div>
        <div className="display-fav-container">
        {activeUser.id ? userBtn : nonUserBtn}

        </div>
        <div className='movie-holder'>
        {moviesToRender.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
        </div>
      </div>
    );
  }
}

MovieHolder.propTypes = {
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
)(MovieHolder);
