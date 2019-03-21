import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Movie = class extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<img src={this.props.image}/>
			
				{/* map over movies and display in <link></link> */}
			</div>
		);
	}
}

export { Movie }