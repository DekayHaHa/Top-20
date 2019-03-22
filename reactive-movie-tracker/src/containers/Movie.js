import React, { Component } from 'react';

const Movie = class extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<img alt='movie poster' src={this.props.image}/>
				<button>Favorite</button>
				{/* map over movies and display in <link></link> */}
			</div>
		);
	}
}

export { Movie }