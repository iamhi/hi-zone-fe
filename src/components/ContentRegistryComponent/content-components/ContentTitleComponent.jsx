import React from 'react';
import PropTypes from 'prop-types';

const ContentTitleComponent = ({
	children,
}) => (
	<div className="content-title-component">
		{children}
	</div>
);

ContentTitleComponent.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentTitleComponent;
