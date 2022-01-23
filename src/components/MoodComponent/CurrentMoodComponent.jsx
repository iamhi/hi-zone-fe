import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectCurrentMood } from '@redux/slices/userPreferenceSlice';

const CurrentMoodComponent = ({
	toggleSelect,
}) => (
	<div className="current-mood-component">
		<button
			onClick={toggleSelect}
			type="button"
			className="no-button-css current-mood-component__change-mood">
			<div className="current-mood-component__label">
				{useSelector(selectCurrentMood)}
			</div>
		</button>
	</div>
);

CurrentMoodComponent.propTypes = {
	toggleSelect: PropTypes.func,
};

export default CurrentMoodComponent;
