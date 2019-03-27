import React, { Component } from 'react';
import '../styles/MovieDetail.scss'

export const MovieDetails = class extends Component {
	render() {
		const {overview, score, image, title } = this.props
		return (
			<div className="MovieDetails">
				<h1 className="movie-details-title">{title}</h1>
				<p className="movie-score">Score: {score}</p>
				<img className="movie-poster" alt='movie poster' src={image} />
				<p className="overview">{overview}</p>
			</div>
		);
	}
}