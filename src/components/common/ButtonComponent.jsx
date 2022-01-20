import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ children, customCss = '', onClick = () => {} }) => (
	<button className={`no-button-css button-component ${customCss}`} type="button" onClick={onClick}>
		{children}
	</button>
);

ButtonComponent.propTypes = {
	children: PropTypes.node,
	customCss: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	onClick: PropTypes.func,
};

export default ButtonComponent;
