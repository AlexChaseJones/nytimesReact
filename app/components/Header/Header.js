import React from 'react';
import Nav from './Nav';
import Jumbotron from './Jumbotron'

export default class Header extends React.Component {
	render() {
		return(
			<div className="main-container">
				<div className="container">
					<Nav />
					<Jumbotron />
					{this.props.children}
				</div>
			</div>
		)
	}
}