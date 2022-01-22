import React from 'react';
import PropTypes from 'prop-types';

const SocialMediaDisplayComponent = ({
	className,
	url,
	label,
}) => (
	<div className="social-media-display-component">
		<a className="social-media-display-component__link" href={url} target="_blank" rel="noreferrer">
			<i className={`${className} social-media-display-component__icon`} />
			<div className="social-media-display-component__label">
				{label}
			</div>
		</a>
	</div>
);

SocialMediaDisplayComponent.propTypes = {
	className: PropTypes.string,
	url: PropTypes.string,
	label: PropTypes.string,
};

export default SocialMediaDisplayComponent;
