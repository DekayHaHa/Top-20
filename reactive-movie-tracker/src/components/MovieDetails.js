import React, { Component } from 'react';

export const MovieDetails = class extends Component {
	render() {
		console.log(this.props)
		const {overview, score, image, title } = this.props
		return (
			<div>
				<h1>{title}</h1>
				<img alt='movie poster' src={image} />
				<p>Score: {score}</p>
				<p>{overview}</p>
			</div>
		);
	}
}