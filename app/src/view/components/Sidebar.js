//主界面侧边栏
import React from 'react';

import './styles/SideBar.less';

class Sidebar extends React.Component {
	render(){
		return(
				<div className='navBar'>
						{/*头部*/}
						<div className='nav-top'>
								<div className='nav-top-img'>
										<img className='nav-img' src ='public/images/avatar.jpg' />
								</div>
						</div>
						<div className="nav-menu">
								<ul className="nav nav-pills nav-stacked" role="tablist">
									<li role="presentation" ><a href="#"><i className="fa fa-superpowers"/>主<i className="fa fa-heartbeat" aria-hidden="true" />页</a></li>
									<li role="presentation" ><a href="#/PhotoBar"><i className="fa fa-camera"/>照片墙</a></li>
									<li role="presentation" ><a href="#/Apps"><i className="fa fa-th-large" aria-hidden="true" />小应用</a></li>
									<li role="presentation" ><a href="#/Todos"><i className="fa fa-list" aria-hidden="true" />计<i className="fa fa-heartbeat" aria-hidden="true" />划</a></li>
									<li role="presentation" ><a href="#"><i className="fa fa-gears"/>博<i className="fa fa-heartbeat" aria-hidden="true" />课</a></li>
									<li role="presentation" ><a href="#"><i className="fa fa-gears"/>设<i className="fa fa-heartbeat" aria-hidden="true" />置</a></li>
									<li role="presentation" ><a href="#">Profile</a></li>
									<li role="presentation" ><a href="#">Profile</a></li>
									<li role="presentation" ><a href="#">Profile</a></li>
									<li role="presentation" ><a href="#">Profile</a></li>
									<li role="presentation"><a href="#">Messages</a></li>
								</ul>
						</div>
						<div className='navBar-footer'>

						</div>
						{/*<div className='nav-right'>*/}
							{/*<a id='nav-right'><i className="fa fa-angle-left fa-3x" /></a>*/}
						{/*</div>*/}
				</div>
		);
	}
}

export default Sidebar;