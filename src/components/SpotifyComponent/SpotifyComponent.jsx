import React from 'react';

// TODO: Fetch the playlist url based on the mood
const SpotifyComponent = () => (
	<div className="spotify-component">
		<iframe
			className="spotify-component__spotify-iframe"
			title="spotify-player"
			src="https://open.spotify.com/embed/playlist/2V3LZ7Pjk6HNhlikDn4sl2?utm_source=generator"
			width="100%"
			height="380"
			frameBorder="0"
			allowFullScreen=""
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
	</div>
);

export default SpotifyComponent;
