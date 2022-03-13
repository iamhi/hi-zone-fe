import React from 'react';
import { useDispatch } from 'react-redux';

import FormComponent from '@common-components/FormComponent';
import FormInputComponent from '@common-components/FormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';

import { createBlogRequest } from '@services/blog';
import { addBlog } from '@redux/slices/blogSlice';

const titleInput = 'title';
const mediaInput = 'mediaUrl';
const mediaTypeInput = 'mediaType';
const contentInput = 'content';

const BlogCreateComponent = () => {
	const dispatch = useDispatch();

	const createBlogAction = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const requestData = Object.fromEntries(formData);

		try {
			const newBlog = await createBlogRequest(requestData);

			dispatch(addBlog(newBlog));
		} catch (err) {
			console.warn({ err });
		}
	};

	return (
		<div className="blog-create-component">
			<div className="blog-create-component__title">
				New blog
			</div>
			<FormComponent onSubmit={createBlogAction}>
				<FormInputComponent
					label="Title"
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
