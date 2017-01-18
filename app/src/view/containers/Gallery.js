/*
* 瀑布流照片墙
* */
import React, { Component } from 'react';
import  MasonryComponent from 'react-masonry-component';

import PhotoChunk from '../components/PhotoChunk';

class Gallery extends Component {

	constructor() {
		super();
		this.masonryOptions = {
			transitionDuration: 0
		};
	}


	render() {

		return (
			<div>
				<nav className="navbar navbar-default navbar-static-top gallery-nav" role="navigation">
					<div className="container">
					</div>
					<ul className="nav nav-pills" role="tablist">
						<li role="presentation" ><a href="#">Home</a></li>
						<li role="presentation"><a href="#">Profile</a></li>
						<li role="presentation"><a href="#">Messages</a></li>
					</ul>
				</nav>

			</div>
		);

	}

}

// Gallery.propTypes = {
// 	srcs: React.PropTypes.array.isRequired
// };

export default Gallery;