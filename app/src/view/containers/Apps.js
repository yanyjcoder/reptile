import React, { Component } from 'react';

import './styles/apps.less';

import CommonApp from './CommonApp';

class Apps extends Component {

	constructor() {
		super();
		this.contextApps = [];
		this.contextApps.push(<CommonApp/>);
	}

	render() {
		return(
				<div className="apps">
					{this.contextApps}
					<div className="panel panel-success">
						<div className="panel-heading">Panel heading without title</div>
						<div className="panel-body">
							Panel content
						</div>
					</div>
					<div className="panel panel-info">
						<div className="panel-heading">Panel heading without title</div>
						<div className="panel-body">
							Panel content
						</div>
					</div>
					<div className="panel panel-warning">
						<div className="panel-heading">Panel heading without title</div>
						<div className="panel-body">
							Panel content
						</div>
					</div>
					<div className="panel panel-danger">
						<div className="panel-heading">Panel heading without title</div>
						<div className="panel-body">
							Panel content
						</div>
					</div>
				</div>
		)
	}

}


export default Apps;