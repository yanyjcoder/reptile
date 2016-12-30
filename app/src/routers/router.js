import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import Jumbotron from '../view/containers/Jumbotron';
import Index from '../view/containers/Index';

let IndexRouter = () => {
	return (
			<Router history={hashHistory} >
					{/*<Route path ='/' component = {Jumbotron} />*/}
					<Route path ='/index' component = {Index} />
			</Router>
	);
};

export default IndexRouter;