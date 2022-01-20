import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const FormTextareaComponent = ({
	customInputCss = '',
	customLabelCss = '',
	name = `input-field-${Math.random()}`,
	placeholder,
	required = false,
	value,
	label,
	readOnly = false,
	rows = 4,
	cols,
	wrap,
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

	/* eslint-disable jsx-a11y/no-autofocus */
	return (
		<label
			className={`form-input-component__label ${customLabelCss}`}
			htmlFor={name}>
			{label}
			<textarea
				ref={inputRef}
				className={`form-input-component__input ${customInputCss}`}
				placeholder={placeholder}
				required={required}
				name={name}
				autoFocus={false}
				readOnly={readOnly}
				rows={rows}
				cols={cols}
				wrap={wrap}
				value={value}
				onChange={onChange}>
			</textarea>
		</label>
	);
};

FormTextareaComponent.propTypes = {
	customInputCss: PropTypes.string,
	customLabelCss: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string,
	label: PropTypes.string,
	readOnly: PropTypes.bool,
	rows: PropTypes.number,
	cols: PropTypes.number,
	wrap: PropTypes.string,
	onChange: PropTypes.func,
	invalidMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FormTextareaComponent;
