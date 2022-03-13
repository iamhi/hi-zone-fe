import Urls from './urls';

export const fetchAllBlogRequest = (page, size) => fetch(Urls.fetchAllBlog + '?' + new URLSearchParams({
	page,
	size,
}).toString(), {
	method: 'GET',
}).then((response) => response.json());

export const createBlogRequest = (body) => fetch(Urls.createBlog, {
	method: 'POST',
	credentials: 'include',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(body),
}).then((response) => response.json());
