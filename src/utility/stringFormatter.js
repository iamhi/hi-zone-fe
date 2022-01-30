// eslint-disable-next-line no-template-curly-in-string
const ARGUMENT = '${0}';

export default ({ format, args }) => {
	let formatted = format;

	while (format.includes(ARGUMENT) && args.length > 0) {
		formatted = formatted.replace(ARGUMENT, args.shift());
	}

	return formatted;
};
