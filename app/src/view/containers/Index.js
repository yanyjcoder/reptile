//主页面ui
import React from 'react';

import SideBar from '../components/Sidebar';
import Jumbotron from './Jumbotron';

class Index extends React.Component {
	render() {
		return (
				<div>
					<div className="page-navbar">
					<SideBar/>
					{/*<Jumbotron/>*/}
					</div>
					<div className="page-container">
						{this.props.children}
					</div>
				</div>
		) ;
	}
}

export default Index;
