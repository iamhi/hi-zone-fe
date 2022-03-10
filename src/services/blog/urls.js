const hostname = 'http://localhost:8082';
const servicePrefix = '/hi-zone-api/blog';

const fetchAllBlog = hostname + servicePrefix;

export default {
	hostname,
	servicePrefix,
	fetchAllBlog,
};
