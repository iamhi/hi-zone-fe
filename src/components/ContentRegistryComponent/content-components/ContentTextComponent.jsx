import React from 'react';
import PropTypes from 'prop-types';

const ContentTextComponent = ({
	children,
}) => (
	<div className="content-text-component">
		{children}
	</div>
);

ContentTextComponent.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentTextComponent;
