/**
 * 小程序集合 应用
 * */

import React, { Component } from 'react';

import './styles/App.less';

class App extends Component {

	render() {
		console.log(this.props.content)
		return (
				<div className="card" >
						<div className="card-block">
							<h4 className="card-title">日历</h4>
						</div>
					<img className="card-img-top img-thumbnail" src="public/images/apps-con/rili.jpg" alt="Card image cap" />
				</div>
		);
	}
}

App.propTypes = {
	backgroundImg: React.PropTypes.string,
	content: React.PropTypes.string.isRequired
};

export default App;