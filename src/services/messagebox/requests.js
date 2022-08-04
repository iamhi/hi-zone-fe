import Urls from './urls';

export const fetchMessagesRequest = () => fetch(Urls.messageUrl, {
	method: 'GET',
	credentials: 'include',
}).then((response) => response.json());

export const postMessageRequest = (body) => fetch(Urls.messageUrl, {
	method: 'POST',
	credentials: 'include',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(body),
}).then((response) => response.json());
