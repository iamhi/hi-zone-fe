import aggressiveTheme from './aggressiveTheme';
import chillTheme from './chillTheme';
import hackerTheme from './hackerTheme';

const themes = [
	aggressiveTheme,
	chillTheme,
	hackerTheme,
];

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

export const getThemeNames = themes.map((theme) => theme.name);

export default {
	selectTheme,
	getThemeNames,
};
