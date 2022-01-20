/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const PopupDisplayComponent = ({ children, backgroundClick = () => {} }) => (
	<div className="popup-display-component">
		<div className="popup-display-component__background" onClick={backgroundClick}>
			<div className="popup-display-component__content" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	</div>
);

PopupDisplayComponent.propTypes = {
	backgroundClick: PropTypes.func,
	children: PropTypes.node,
};

export default PopupDisplayComponent;
