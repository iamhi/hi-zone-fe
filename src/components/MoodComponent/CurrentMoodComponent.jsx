import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectCurrentMood } from '@redux/slices/userPreferenceSlice';
import themeRegistry from '@theme/themeRegistry';

const CurrentMoodComponent = ({
	toggleSelect,
}) => {
	const selectedMood = useSelector(selectCurrentMood);

	useEffect(() => {
		themeRegistry.selectTheme(selectedMood);
	}, [selectedMood]);

	return (
		<div className="current-mood-component">
			<button
				onClick={toggleSelect}
				type="button"
				className="no-button-css current-mood-component__change-mood">
				<div className="current-mood-component__label">
					{selectedMood}
				</div>
			</button>
		</div>
	);
};

CurrentMoodComponent.propTypes = {
	toggleSelect: PropTypes.func,
};

export default CurrentMoodComponent;
