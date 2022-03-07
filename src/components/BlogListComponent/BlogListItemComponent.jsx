import React from 'react';
import PropTypes from 'prop-types';

const BlogListItemComponent = ({
	title,
	content,
	mediaUrl,
	mediaType,
	createdAt,
}) => (
	<div className="blog-list-item-component">
		<div className="blog-list-item-component__title">
			{title}
		</div>


		<div className="blog-list-item-component__media">
			{mediaUrl}
			{mediaType}
		</div>

		<div className="blog-list-item-component__content">
			{content}
		</div>

		<div className="blog-list-item-component__created-at">
			{createdAt}
		</div>
	</div>
);

BlogListItemComponent.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	mediaUrl: PropTypes.string,
	mediaType: PropTypes.string,
	createdAt: PropTypes.string,
};

export default BlogListItemComponent;
