const hostname = 'http://localhost:8081';
const servicePrefix = '/hi-zone-api/authentication';

const meUrl = hostname + servicePrefix + '/user/me';

export default {
	hostname,
	servicePrefix,
	meUrl,
};
