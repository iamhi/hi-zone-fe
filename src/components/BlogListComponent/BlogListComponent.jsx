import React, { useEffect, useState } from 'react';

import { fetchAllBlogRequest } from '@services/blog';

import BlogListItemComponent from './BlogListItemComponent';

const BlogListComponent = () => {
	const [blogs, setBlogs] = useState([]);

	const fetchAllBlog = async () => {
		const blogsResponse = await fetchAllBlogRequest();

		// Do some error checking here maybe?

		setBlogs(blogsResponse);
	};

	useEffect(() => {
		fetchAllBlog();
	}, [fetchAllBlog]);

	const blogComponents = blogs.map((blog) => (
		<BlogListItemComponent key={blog.uuid} blog={blog} />
	));

	return (
		<div>
			{blogComponents}
		</div>
	);
};

export default BlogListComponent;
