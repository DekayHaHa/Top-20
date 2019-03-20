import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { Movie } from './Movie'


const MovieHolder = class extends Component {
	render() {
		return (
			<div>
				<h1>I'm the holder</h1>
				<Link to={`/${0}`}><h1>Heyo, potential movie</h1></Link>
				<Route exact path='/0' component={Movie}/>
				{/* map over movies and display in <link></link> */}
			</div>
		);
	}
}

export {MovieHolder}