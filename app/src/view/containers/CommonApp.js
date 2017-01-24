import React, { Component } from 'react';

import App from '../components/App';

class CommonApp extends Component {


	constructor() {
		super();
		this.apps = [];
		this.apps.push(<App content="123" backgroundImg='..'/>);
	}

	render() {
		return (
				<div className="panel panel-primary ">
					<div className="panel-heading"><i className="fa fa-paper-plane-o" aria-hidden="true" />   常用应用</div>
					<div className="panel-body -th-large bridly">
						{this.apps}
					</div>
				</div>
		);
	}
}

export default CommonApp;