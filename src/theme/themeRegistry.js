import aggressiveTheme from './aggressiveTheme';
import chillTheme from './chillTheme';
import hackerTheme from './hackerTheme';
import {
	saveTheme,
	hasCustomTheme,
	getCustomTheme,
	CUSTOM_THEME_NAME,
} from './customTheme';

const themes = [
	aggressiveTheme,
	chillTheme,
	hackerTheme,
];

if (hasCustomTheme()) {
	themes.push({
		name: CUSTOM_THEME_NAME,
		properties: getCustomTheme(),
	});
}

const getRoot = () => document.querySelector(':root');

const activateThemeProperties = (properties) => {
	const root = getRoot();

	properties.forEach((property) => {
		root.style.setProperty(property.key, property.value);
	});
};

export const selectTheme = (themeName) => {
	const selectedTheme = themes.find((theme) => theme.name === themeName);

	if (selectedTheme) {
		activateThemeProperties(selectedTheme.properties);
	}
};

export const getThemeNames = () => themes.map((theme) => theme.name);

export const setCustomTheme = (customThemeData) => {
	saveTheme(customThemeData);

	if (themes.length === 3) {
		themes.push({
			name: CUSTOM_THEME_NAME,
			properties: getCustomTheme(),
		});
	}
};

export default {
	selectTheme,
	getThemeNames,
	setCustomTheme,
	CUSTOM_THEME_NAME,
};
