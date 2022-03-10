import React from 'react';
import PropTypes from 'prop-types';

const BlogImageMediaComponent = ({ mediaUrl, mediaType }) => (
	<img src={mediaUrl} alt={mediaType} className="blog-image-media-component" />
);

BlogImageMediaComponent.propTypes = {
	mediaUrl: PropTypes.string,
	mediaType: PropTypes.string,
};

export default BlogImageMediaComponent;
