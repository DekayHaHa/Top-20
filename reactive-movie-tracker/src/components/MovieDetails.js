import React, { Component } from 'react';

const MovieDetails = class extends Component {
	render() {
		const {overview, score, image, title } = this.props
		return (
			<div>
				<h1>{title}</h1>
				<img src={image} />
				<p>Score: {score}</p>
				<p>{overview}</p>
				{/* map over movies and display in <link></link> */}
			</div>
		);
	}
}

export { MovieDetails }