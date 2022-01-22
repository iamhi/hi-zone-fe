import React from 'react';

import socialMediaContent from '@assets/content/social-media-content.json';

import SocialMediaDisplayComponent from './SocialMediaDisplayComponent';

const SocialMediaComponent = () => (
	<div className="social-media-component">
		{socialMediaContent.map(({
			key,
			className,
			url,
			label,
		}) =>
			<SocialMediaDisplayComponent
				key={key}
				className={className}
				url={url}
				label={label} />)}
	</div>
);

export default SocialMediaComponent;
