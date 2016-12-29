import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import Jumbotron from '../view/containers/Jumbotron';

let IndexRouter = () => {
	return (
			<Router history={hashHistory} >
					<Route path ='/' component = {Jumbotron} />
			</Router>
	);
};

export default IndexRouter;