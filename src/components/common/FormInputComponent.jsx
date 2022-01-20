import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const FormInputComponent = ({
	customInputCss = '',
	customLabelCss = '',
	name = `input-field-${Math.random()}`,
	placeholder,
	type = 'text',
	required = false,
	value,
	label,
	onChange = () => {},
	invalidMessage = '',
}) => {
	const inputRef = useRef();

	useEffect(() => {
		const { current } = inputRef;

		if (current && invalidMessage !== -1) {
			current.setCustomValidity(invalidMessage);
			current.reportValidity();
		}
	}, [invalidMessage]);

	return (
		<label
			className={`form-input-component__label ${customLabelCss}`}
			htmlFor={name}>
			{label}
			<input
				ref={inputRef}
				className={`form-input-component__input ${customInputCss}`}
				placeholder={placeholder}
				required={required}
				type={type}
				name={name}
				onChange={onChange}
				value={value} />
		</label>
	);
};

FormInputComponent.propTypes = {
	customInputCss: PropTypes.string,
	customLabelCss: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func,
	invalidMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FormInputComponent;
