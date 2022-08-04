import React from 'react';
import PropTypes from 'prop-types';

import MessageboxListItemComponent from './MessageboxListItemComponent';

const MessageboxListComponent = ({ messages }) => {
	const messageboxListItemComponents = messages.map((message) => (
		<MessageboxListItemComponent key={message.uuid} content={message.content} createdAt={message.createdAt} />
	));

	return (
		<div className="messagebox-list-component">
			{messageboxListItemComponents}
		</div>
	);
};

MessageboxListComponent.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.shape({
		uuid: PropTypes.string,
		content: PropTypes.string,
		createdAt: PropTypes.string,
	})),
};

export default MessageboxListComponent;
