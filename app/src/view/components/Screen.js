import React from 'react';

import './styles/Screen.less';

class Screen extends React.Component {

	constructor() {
		super();
		this.state = {
			closed: ''
		};
	}

	componentWillMount() {
		setTimeout(() => {
			this.setState({
				closed: 'close'
			});
		}, 3000);
	}

	render() {
		if (this.state.closed === 'close') {
			return null;
		}
		return(
			<div className='jumbotron' >

					<h1>{this.props.title}</h1>
					<p>{this.props.context}</p>
					{this.props.children}
			</div>
		);
	}
}

Screen.propTypes = {
	title: React.PropTypes.string.isRequired,
	context: React.PropTypes.string.isRequired
};

export default Screen;