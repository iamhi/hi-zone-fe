import React from 'react';
import PropTypes from 'prop-types';

const ContentSubtitleComponent = ({
	children,
}) => (
	<div className="content-subtitle-component">
		{children}
	</div>
);

ContentSubtitleComponent.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentSubtitleComponent;
