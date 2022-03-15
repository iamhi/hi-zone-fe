import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormInputComponent from './FormInputComponent';

const ManagedFormInputComponent = ({
	customInputCss = '',
	customLabelCss = '',
	name = `input-field-${Math.random()}`,
	placeholder,
	type = 'text',
	required = false,
	value,
	label,
	invalidMessage = '',
}) => {
	const [inputValue, setInputValue] = useState(value);

	return (
		<FormInputComponent
			customInputCss={customInputCss}
			customLabelCss={customLabelCss}
			name={name}
			placeholder={placeholder}
			type={type}
			required={required}
			label={label}
			value={inputValue}
			onChange={(event) => setInputValue(event.target.value)}
			invalidMessage={invalidMessage}	/>
	);
};

ManagedFormInputComponent.propTypes = {
	customInputCss: PropTypes.string,
	customLabelCss: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string,
	label: PropTypes.string,
	invalidMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ManagedFormInputComponent;
