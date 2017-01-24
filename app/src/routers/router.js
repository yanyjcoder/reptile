import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import Jumbotron from '../view/containers/Jumbotron';
import Index from '../view/containers/Index';
import Gallery from '../view/containers/Gallery';
import Apps from '../view/containers/Apps';




let IndexRouter = () => {

	return (
			<Router history={hashHistory} >

					<Route path ='/' component = {Index} >
						<Route path='PhotoBar' component={Gallery}/>
						<Route path='Apps' component={Apps}/>

					</Route>


			</Router>
	);
};

export default IndexRouter;