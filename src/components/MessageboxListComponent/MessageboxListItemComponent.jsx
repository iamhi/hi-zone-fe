import React from 'react';
import PropTypes from 'prop-types';

const MessageboxListItemComponent = ({
	content,
	createdAt,
}) => (
	<div className="messagebox-list-item-component">
		<div className="messagebox-list-item-component__content">
			{content}
		</div>
		<div className="messagebox-list-item-component__created-at">
			{createdAt}
		</div>
	</div>
);

MessageboxListItemComponent.propTypes = {
	content: PropTypes.string,
	createdAt: PropTypes.string,
};

export default MessageboxListItemComponent;
