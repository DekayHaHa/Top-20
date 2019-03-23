import React, { Component } from "react";
import { cleanFavorites} from '../utilities/cleaner'

import Movie from "./Movie";
import { connect } from "react-redux";

class MovieHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFavorites: false,
      favorites: []
    };
  }

  retrieveAllFavorites = async () => {
    const id = this.props.activeUser.id;
    const url = `http://localhost:3000/api/users/${id}/favorites`;
    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json"
      }
    });
		const data = await response.json();
		
		await this.setState({
			favorites: data.data
		})
    // await this.setState({ favorites: data. });
  };

  toggleFavorites = async () => {
		const favoriteMovie = await this.retrieveAllFavorites();
		console.log(this.state.favorites)
    if (this.state.displayFavorites === false) {
      this.setState({ displayFavorites: true });
    } else {
      this.setState({ displayFavorites: false });
    }
  };

  render() {
    if (this.state.displayFavorites === false) {
      return (
        <div>
          <button onClick={this.toggleFavorites}>Display Favorites</button>

          {this.props.movies.map(movie => {
            return (
              <div key={movie.id}>
                <Movie {...movie} />
              </div>
            );
          })}
        </div>
      );
    } else {
			// console.log(this.state.favorites)
      return (
        <div>
          <button onClick={this.toggleFavorites}>Display All Movies</button>
          <div>
            {this.state.favorites.map(movie => {
              return (
                <div key={movie.id}>
                  <Movie {...movie} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  activeUser: state.activeUser
});

export default connect(
  mapStateToProps,
  null
)(MovieHolder);
