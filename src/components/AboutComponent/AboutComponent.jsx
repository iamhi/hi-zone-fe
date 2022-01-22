import React from 'react';

import ContentRegistryComponent from '@components/ContentRegistryComponent';
import aboutContent from '@assets/content/about-content.json';

const AboutComponent = () => (
	<div className="about-component">
		<ContentRegistryComponent contentData={aboutContent} />
	</div>
);

export default AboutComponent;
