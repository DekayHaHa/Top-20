import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Movie = class extends Component {
	render() {
		return (
			<div>
				<h1>I'm A MOVIE!</h1>
			
				{/* map over movies and display in <link></link> */}
			</div>
		);
	}
}

export { Movie }