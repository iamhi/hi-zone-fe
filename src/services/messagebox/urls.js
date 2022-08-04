const hostname = process.env.MESSAGE_BOX_SERVICE_URL;
const servicePrefix = '/hi-zone-api/messagebox';

const messageUrl = hostname + servicePrefix + '/message';

export default {
	hostname,
	servicePrefix,
	messageUrl,
};
