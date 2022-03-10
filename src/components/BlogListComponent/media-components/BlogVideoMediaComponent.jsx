import React from 'react';
import PropTypes from 'prop-types';

const BlogVideoMediaComponent = ({
	mediaUrl,
	mediaType,
}) => (
	<video controls>
		<source src={mediaUrl} type={mediaType} className="blog-video-media-component" />
	</video>
);

BlogVideoMediaComponent.propTypes = {
	mediaUrl: PropTypes.string,
	mediaType: PropTypes.string,
};

export default BlogVideoMediaComponent;
