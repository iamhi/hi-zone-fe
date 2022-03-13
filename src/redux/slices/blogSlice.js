/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
	name: 'blog',
	initialState: {
		list: [],
		page: 0,
		size: 10,
	},
	reducers: {
		addBlogs(state, action) {
			state.list.push(...action.payload);
		},
		addBlog(state, action) {
			const {
				uuid,
				title,
				content,
				mediaUrl,
				mediaType,
				createdAt,
			} = action.payload;

			state.list.unshift({
				uuid,
				title,
				content,
				mediaUrl,
				mediaType,
				createdAt,
			});
		},
		nextPage(state) {
			state.page += 1;
		},
	},
});

export const {
	addBlogs,
	addBlog,
	nextPage,
} = blogSlice.actions;

export const selectBlogList = (state) => state.blog.list;

export const selectRequestPage = (state) => state.blog.page;

export const selectRequestSize = (state) => state.blog.size;

export const selectCanLoadMore = (state) => state.blog.list.length === ((state.blog.page + 1) * state.blog.size);

export default blogSlice.reducer;
