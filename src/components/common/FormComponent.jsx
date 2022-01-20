/* eslint-disable operator-linebreak */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormComponent = ({
	children,
	customCss = '',
	onSubmit = () => {},
	formMessage = '',
	errorMessage = '',
}) => {
	const formRef = useRef();

	useEffect(() => {
		if (formRef.current) {
			formRef.current.focus();
		}
	}, [formRef.current]);

	return (
		<form className={`form-component ${customCss}`} onSubmit={onSubmit} ref={formRef}>
			{formMessage !== '' && (
				<div
					className={classNames('form-component__form-message', {
						'form-component__form-message--error-message': errorMessage,
					})}>
					{formMessage}
				</div>
			)}
			{children}
		</form>
	);
};

FormComponent.propTypes = {
	onSubmit: PropTypes.func,
	children: PropTypes.node,
	customCss: PropTypes.string,
	formMessage: PropTypes.string,
	errorMessage: PropTypes.bool,
};

export default FormComponent;
