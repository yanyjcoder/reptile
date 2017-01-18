/*
* 照片块
* */
import React, {Component} from 'react';

class PhotoChunk extends Component {
	constructor(){
		super();
	}

	render() {
		return(
				<li className="image-element-class">
					<img src={this.props.src} />
				</li>
		);
	}
}

PhotoChunk.propTypes = {
	src: React.PropTypes.string.isRequired //图片地址
};

export default PhotoChunk;
