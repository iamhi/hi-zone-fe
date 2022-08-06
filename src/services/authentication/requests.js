import Urls from './urls';

export const userLoginRequest = () => fetch(Urls.meUrl, {
	method: 'GET',
	credentials: 'include',
}).then((response) => response.json());

export const refreshTokenRequest = () => fetch(Urls.refreshTokenUrl, {
	method: 'POST',
	credentials: 'include',
});
