import React from 'react';
import PropTypes from 'prop-types';

const FormButtonGroupComponent = ({ children, customCss = '' }) => (
	<div className={`form-button-group-component ${customCss}`}>
		{children}
	</div>
);

FormButtonGroupComponent.propTypes = {
	children: PropTypes.node,
	customCss: PropTypes.string,
};

export default FormButtonGroupComponent;
