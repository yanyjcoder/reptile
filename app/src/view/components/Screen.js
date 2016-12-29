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
		let imageNum = Math.floor(Math.random()*3 + 1);
		let imgUrl = 'public/images/screen_'+ imageNum + '.jpg';
		return(
			<div className='jumbotron' >
					<img id='jumbotron-image' src={imgUrl}/>
					<div id='jumbotron-content'>
						<h1>{this.props.title}</h1>
						<p>{this.props.context}</p>
						{this.props.children}
					</div>
			</div>
		);
	}
}

Screen.propTypes = {
	title: React.PropTypes.string.isRequired,
	context: React.PropTypes.string.isRequired
};

export default Screen;