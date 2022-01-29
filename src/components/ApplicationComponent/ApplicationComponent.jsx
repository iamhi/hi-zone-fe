import React from 'react';
import { useSelector } from 'react-redux';

import spotifyContent from '@assets/content/application-content.json';
import { selectCurrentMood } from '@redux/slices/userPreferenceSlice';

const ApplicationComponent = () => {
	const mood = useSelector(selectCurrentMood);
	const { url: currentMoodUrl } = spotifyContent.moods[mood];

	return (
		<div className="application-component">
			<iframe
				scrolling="no"
				className="application-component__application-frame"
				src={currentMoodUrl}
				title="application" />
		</div>
	);
};

export default ApplicationComponent;
