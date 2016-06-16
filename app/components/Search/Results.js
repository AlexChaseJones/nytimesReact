import React from 'react';
import Result from './Result';

export default class Results extends React.Component {
	render() {
		let rows = [];
		this.props.results.forEach((article) => {
			rows.push(<Result title={article.headline.main} date={article.pub_date} url={article.web_url} key={Math.random()}/>)
		})
		if (rows.length == 0) {
			rows = (
				<li className="list-group-item">
					<h3>
						<span>
							<em>Enter Search Terms to Begin...</em>							
						</span>
					</h3>
				</li>
			)
		}
		return (
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title">
									<strong>
										<i className="fa fa-list-alt" />
										{' '   /*...Adds a space*/} Results
									</strong>
								</h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
									{rows}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}