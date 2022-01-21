import React from 'react';

import TitleComponent from '@components/TitleComponent';
import MoodComponent from '@components/MoodComponent';
import SpotifyComponent from '@components/SpotifyComponent';
import AboutComponent from '@components/AboutComponent';
import CurrentFocusComponent from '@components/CurrentFocusComponent';
import ApplicationComponent from '@components/ApplicationComponent';

const HomePageComponent = () => (
	<div className="basic-page">
		<div className="home-page">
			<div className="home-page__container home-page__container--left">
				<TitleComponent />

				<AboutComponent />

				<CurrentFocusComponent />

				<ApplicationComponent />
			</div>

			<div className="home-page__container home-page__container--right">
				<MoodComponent />

				<SpotifyComponent />
			</div>
		</div>
	</div>
);

export default HomePageComponent;
