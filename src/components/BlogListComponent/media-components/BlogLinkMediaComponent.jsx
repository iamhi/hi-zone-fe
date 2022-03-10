import React from 'react';
import PropTypes from 'prop-types';

const BlogLinkMediaComponent = ({
	mediaUrl,
}) => (
	<a href={mediaUrl} target="_blank" rel="noreferrer" className="blog-link-media-component">
		Link
	</a>
);

BlogLinkMediaComponent.propTypes = {
	mediaUrl: PropTypes.string,
};

export default BlogLinkMediaComponent;
