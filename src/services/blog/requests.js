import Urls from './urls';

export const fetchAllBlogRequest = () => fetch(Urls.fetchAllBlog, {
	method: 'GET',
}).then((response) => response.json());
