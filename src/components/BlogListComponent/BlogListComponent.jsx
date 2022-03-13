import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllBlogRequest } from '@services/blog';
import {
	addBlogs,
	selectBlogList,
	selectRequestPage,
	selectRequestSize,
} from '@redux/slices/blogSlice';

import BlogListItemComponent from './BlogListItemComponent';
import BlogListLoadMoreComponent from './BlogListLoadMoreComponent';

const BlogListComponent = () => {
	const dispatch = useDispatch();
	const blogs = useSelector(selectBlogList);
	const requestPage = useSelector(selectRequestPage);
	const requestSize = useSelector(selectRequestSize);

	const fetchAllBlog = useCallback(async () => {
		const blogsResponse = await fetchAllBlogRequest(requestPage, requestSize);

		dispatch(addBlogs(blogsResponse));
	}, [requestSize, requestPage]);

	useEffect(() => {
		fetchAllBlog();
	}, [fetchAllBlog]);

	const blogComponents = blogs.map((blog) => (
		<BlogListItemComponent key={blog.uuid} blog={blog} />
	));

	return (
		<div className="blog-list-component">
			{blogComponents}

			<BlogListLoadMoreComponent />
		</div>
	);
};

export default BlogListComponent;
