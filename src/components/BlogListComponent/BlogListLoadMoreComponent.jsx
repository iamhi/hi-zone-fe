import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	nextPage,
	selectCanLoadMore,
} from '@redux/slices/blogSlice';

const BlogListLoadMoreComponent = () => {
	const dispatch = useDispatch();
	const canLoadMore = useSelector(selectCanLoadMore);

	const onClickAction = () => dispatch(nextPage());

	if (!canLoadMore) {
		return null;
	}

	return (
		<button type="button" className="no-button-css blog-list-load-more-component" onClick={onClickAction}>
			<div className="blog-list-load-more-component__label">
				Load more
			</div>
		</button>
	);
};

export default BlogListLoadMoreComponent;
