import React, { Component } from 'react';
import '../styles/MovieDetail.scss'

export const MovieDetails = class extends Component {
	render() {
		const {overview, score, image, title } = this.props
		return (
			<div className="movie-details">
				<img className="img-details" alt='movie poster' src={image} />
				<div className='details-container'>
				<h1 className="title-details">{title}</h1>
				<p className="score-details">Score: {score}</p>
				<p className="overview-details">{overview}</p>
				</div>
			</div>
		);
	}
}