import React from 'react';

export default class Result extends React.Component {
	render() {
		return (
			<li className="list-group-item">
				<h3>
					<span>
						<em>
							{this.props.title}
						</em>
					</span>
					<span className="btn-group pull-right">
						<a href={this.props.url} target="_blank">
							<button className="btn btn-default">
								View Article
							</button>
						</a>
						<button className="btn btn-primary" onClick={this.handleClick} data-toggle="modal">
							Save
						</button>
					</span>
				</h3>
				<p>
					Date Published: {this.props.date.substring(0,10)}
				</p>
			</li>
		)
	}
}