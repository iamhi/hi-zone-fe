import React from 'react';

import ContentTextComponent from './content-components/ContentTextComponent';
import ContentTitleComponent from './content-components/ContentTitleComponent';
import ContentSubtitleComponent from './content-components/ContentSubtitleComponent';

const TEXT_TYPE = 'text';
const TITLE_TYPE = 'title';
const SUBTITLE_TYPE = 'subtitle';

/* eslint-disable react/jsx-props-no-spreading */
const getComponent = ({
	key,
	type,
	content,
	...componentProps
}) => {
	switch (type) {
	case TEXT_TYPE:
		return <ContentTextComponent key={key} {...componentProps}>{content}</ContentTextComponent>;

	case TITLE_TYPE:
		return <ContentTitleComponent key={key} {...componentProps}>{content}</ContentTitleComponent>;

	case SUBTITLE_TYPE:
		return <ContentSubtitleComponent key={key} {...componentProps}>{content}</ContentSubtitleComponent>;

	default:
		return <ContentTextComponent key={key} {...componentProps}>{content}</ContentTextComponent>;
	}
};

export default getComponent;
/* eslint-enable react/jsx-props-no-spreading */
