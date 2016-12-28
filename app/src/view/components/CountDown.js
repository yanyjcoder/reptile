import React from 'react';

import './styles/CountDown.less';

class CountDown extends React.Component {

	constructor(props) {
		super();
		this.state = {
			number: props.number
		}
	}

	componentDidMount() {
		console.log(this.state.number);

			let count =setInterval(() => {
				this.setState({
					number: this.state.number - 1
				});
				if (this.state.number === 1) {
					clearInterval(count);
				}
			}, 1000);

	}

	render() {
		return(
				<div className="Circle-outer">
					<div className="Circle">
						<p>{this.state.number}秒后自动关闭 </p>
					</div>
				</div>
		);
	}
}

CountDown.propTypes = {
	number: React.PropTypes.number.isRequired
};

export default CountDown;