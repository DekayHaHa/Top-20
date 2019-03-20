import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


const Header = class extends Component {
render () {
	return (
		<div>
			<h2>I'm the Header</h2>
			<NavLink to='/login'>User Sign In</NavLink>
		</div>
	)
}
}

export {Header}