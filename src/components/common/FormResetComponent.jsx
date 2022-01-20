import React from 'react';
import PropTypes from 'prop-types';

const FormResetComponent = ({
	children,
	onClick = () => {},
	customCss = '',
}) => (
	<input
		value={children}
		type="reset"
		className={`form-reset-component ${customCss}`}
		onClick={onClick} />
);

FormResetComponent.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	customCss: PropTypes.string,
};

export default FormResetComponent;
