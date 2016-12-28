import React from 'react';

import Screen from '../components/Screen';
import CountDown from '../components/CountDown';

class Jumbotron extends React.Component {
	render() {
		return (
				<Screen title='欢迎使用Reptile爬虫'
								context='个人使用，未经允许不可使用！'>
					<CountDown number={3}/>
				</Screen>
		);
	}
}

export default Jumbotron;