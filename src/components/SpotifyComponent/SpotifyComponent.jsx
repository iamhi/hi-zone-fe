import React from 'react';
import { useSelector } from 'react-redux';

import spotifyContent from '@assets/content/spotify-content.json';
import { selectCurrentMood } from '@redux/slices/userPreferenceSlice';

const SpotifyComponent = () => {
	const mood = useSelector(selectCurrentMood);
	console.warn({ mood });
	const { url: currentMoodUrl } = spotifyContent.moods[mood];

	return (
		<div className="spotify-component">
			<iframe
				className="spotify-component__spotify-iframe"
				title="spotify-player"
				src={currentMoodUrl}
				width="100%"
				height="380"
				frameBorder="0"
				allowFullScreen="" />
		</div>
	);
};

export default SpotifyComponent;
