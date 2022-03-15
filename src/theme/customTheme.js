const CUSTOM_THEME_DATA_LOCATION = 'hi-zone-custom-theme-data';
const HAS_CUSTOM_THEME_LOCATION = 'hi-zone-has-custom-theme';

export const CUSTOM_THEME_NAME = 'Your theme';

export const saveTheme = (themeData) => {
	localStorage.setItem(CUSTOM_THEME_DATA_LOCATION, JSON.stringify(
		Object.entries(themeData)
			.map(([key, value]) => ({ key, value }))
	));
	localStorage.setItem(HAS_CUSTOM_THEME_LOCATION, true);
};

export const deleteTheme = () => {
	localStorage.removeItem(CUSTOM_THEME_DATA_LOCATION);
	localStorage.setItem(HAS_CUSTOM_THEME_LOCATION, false);
};

export const hasCustomTheme = () => localStorage.getItem(HAS_CUSTOM_THEME_LOCATION) === 'true';

export const getCustomTheme = () => JSON.parse(localStorage.getItem(CUSTOM_THEME_DATA_LOCATION));
