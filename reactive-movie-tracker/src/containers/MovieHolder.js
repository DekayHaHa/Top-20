import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../styles/MovieHolder.scss";
import { updateFavs } from '../Thunks/updateFavs'

export class MovieHolder extends Component {

  componentDidMount = () => {
    this.checkFavs()
  }

  checkFavs = () => {
    const { activeUser, movies, updateFavs } = this.props
    activeUser.id > 0 && updateFavs( activeUser.id, movies)
  }
  
  render() {
    const { movies } = this.props;
    return (
      <div className='movie-holder'>
        {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
        </div>
    );
  }
}

MovieHolder.propTypes = {
  movies: PropTypes.array,
};

export const mapStateToProps = state => ({
  movies: state.movies,
  activeUser: state.activeUser
});

export const mapDispatchtoProps = dispatch => ({
  updateFavs: (id, movies) => dispatch(updateFavs(id, movies))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(MovieHolder);
