import React from 'react';
// import PropTypes from 'prop-types';

import FormComponent from '@common-components/FormComponent';
import FormInputComponent from '@common-components/FormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';

import { fetchAllBlogRequest, createBlogRequest } from '@services/blog';

const titleInput = 'title';
const mediaInput = 'mediaUrl';
const mediaTypeInput = 'mediaType';
const contentInput = 'content';

const BlogCreateComponent = () => {
	const createBlogAction = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const requestData = Object.fromEntries(formData);

		try {
			console.warn({ requestData });
			const response = await createBlogRequest(requestData);
			console.warn({ response });
			fetchAllBlogRequest();
		} catch (err) {
			console.warn({ err });
		}
	};

	return (
		<div>
			<FormComponent onSubmit={createBlogAction}>
				<FormInputComponent
					label="Blog title"
					require
					name={titleInput} />

				<FormInputComponent
					label="Media url"
					name={mediaInput} />

				<FormInputComponent
					label="Media type"
					name={mediaTypeInput} />

				<FormInputComponent
					label="Text content"
					name={contentInput} />

				<FormSubmitComponent>
					Save input
				</FormSubmitComponent>
			</FormComponent>
		</div>
	);
};

export default BlogCreateComponent;
