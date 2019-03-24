import React, { Component } from "react";
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
  
  toggleFavorites = () => {
    this.setState({ displayFavorites: this.state.displayFavorites ? false : true})
  };

  render() {
    const { movies, activeUser, favorites } = this.props
    const { displayFavorites } = this.state
    const btnText = displayFavorites ? 'Show All' : 'Display Favorites';
    const moviesToRender = activeUser.id && displayFavorites ? favorites : movies
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
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieHolder);
