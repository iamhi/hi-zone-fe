import React from 'react';
import PropTypes from 'prop-types';

import getMediaComponent from './mediaComponentRegistry';

const BlogListItemComponent = ({
	blog: {
		title,
		content,
		mediaUrl,
		mediaType,
		createdAt,
	},
}) => {
	const hasMedia = mediaUrl !== undefined && mediaUrl !== null && mediaUrl !== '';
	const MediaComponent = getMediaComponent(mediaType);

	return (
		<div className="blog-list-item-component">
			<div className="blog-list-item-component__title">
				{title}
			</div>

			<div className="blog-list-item-component__media">
				{hasMedia && <MediaComponent mediaUrl={mediaUrl} mediaType={mediaType} />}
			</div>

			<div className="blog-list-item-component__content">
				{content}
			</div>

			<div className="blog-list-item-component__created-at">
				Created at:&nbsp;
				{new Date(createdAt).toLocaleString()}
			</div>
		</div>
	);
};

BlogListItemComponent.propTypes = {
	blog: PropTypes.shape({
		title: PropTypes.string,
		content: PropTypes.string,
		mediaUrl: PropTypes.string,
		mediaType: PropTypes.string,
		createdAt: PropTypes.string,
	}),
};

export default BlogListItemComponent;
