import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const Header = class extends Component {
render () {
	return (
		<div>
			<h2>I'm the Header</h2>
			<Link to='/login'>User Sign In</Link>
		</div>
	)
}
}

export {Header}