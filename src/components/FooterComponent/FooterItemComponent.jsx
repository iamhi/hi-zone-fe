import React from 'react';
import PropTypes from 'prop-types';

const FooterItemComponent = ({ children }) => (
	<div className="footer-item-component">
		{children}
	</div>
);

FooterItemComponent.propTypes = {
	children: PropTypes.node,
};

export default FooterItemComponent;
