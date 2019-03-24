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
    const favorites = await cleanFavorites(data.data)
		await this.setState({favorites})
   
  };

  toggleFavorites = () => {
    this.setState({ displayFavorites: this.state.displayFavorites ? false : true})
  };

  compareFavorites = () => {
    // return movies compared against user favorites
  }

  render() {
    const { movies, activeUser } = this.props
    const { displayFavorites, favorites } = this.state

    const btnText = displayFavorites ? 'Show All' : 'Display Favorites';
    const moviesToRender = activeUser.id && displayFavorites ? favorites : movies
    {activeUser.id && this.retrieveAllFavorites()}
      return (
        <div>
          <button onClick={this.toggleFavorites}>{btnText}</button>
          {moviesToRender.map(movie => <Movie key={movie.id} {...movie} />)}
        </div>
      );
    // } else {
		// 	// console.log(this.state.favorites)
    //   return (
    //     <div>
    //       <button onClick={this.toggleFavorites}>Display All Movies</button>
    //       <div>
    //         {this.state.favorites.map(movie => {
    //           return (
    //             <div key={movie.id}>
    //               <Movie {...movie} />
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   );
    
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
