import React from 'react';
import { useSelector } from 'react-redux';

import BlogCreateComponent from '@components/BlogCreateComponent';
import BlogListComponent from '@components/BlogListComponent';
import { selectIsAdmin } from '@redux/slices/userDataSlice';

const BlogRouteComponent = () => {
	const isAdmin = useSelector(selectIsAdmin);

	return (
		<>
			{isAdmin && <BlogCreateComponent />}

			<BlogListComponent />
		</>
	);
};

export default BlogRouteComponent;
