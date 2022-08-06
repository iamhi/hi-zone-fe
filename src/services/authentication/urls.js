const hostname = process.env.AUTH_SERVICE_URL;
const servicePrefix = '/hi-zone-api/authentication';

const meUrl = hostname + servicePrefix + '/user/me';
const refreshTokenUrl = hostname + servicePrefix + '/user/accesstoken';

export default {
	hostname,
	servicePrefix,
	meUrl,
	refreshTokenUrl,
};
