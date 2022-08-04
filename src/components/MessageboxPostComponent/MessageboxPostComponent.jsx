import React from 'react';
import PropTypes from 'prop-types';

import FormComponent from '@common-components/FormComponent';
import FormInputComponent from '@common-components/FormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';

const contentInput = 'content';

const MessageboxPostComponent = ({
	postMessageAction,
}) => {
	const onSubmitAction = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const requestData = Object.fromEntries(formData);

		postMessageAction(requestData);
	};

	return (
		<div className="messagebox-post-component">
			<FormComponent onSubmit={onSubmitAction}>
				<FormInputComponent
					label="Post:"
					name={contentInput} />

				<FormSubmitComponent>
					Post
				</FormSubmitComponent>
			</FormComponent>
		</div>
	);
};

MessageboxPostComponent.propTypes = {
	postMessageAction: PropTypes.func,
};

export default MessageboxPostComponent;
