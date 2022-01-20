import React from 'react';
import PropTypes from 'prop-types';

const FormSubmitComponent = ({
	children,
	onClick = () => {},
	customCss = '',
}) => (
	<input
		value={children}
		type="submit"
		className={`form-submit-component ${customCss}`}
		onClick={onClick} />
);

FormSubmitComponent.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	customCss: PropTypes.string,
};

export default FormSubmitComponent;
