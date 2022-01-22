import React from 'react';

import ContentRegistryComponent from '@components/ContentRegistryComponent';
import currentFocusContent from '@assets/content/current-focus-content.json';

const CurrentFocusComponent = () => (
	<div className="current-focus-component">
		<ContentRegistryComponent contentData={currentFocusContent} />
	</div>
);

export default CurrentFocusComponent;
