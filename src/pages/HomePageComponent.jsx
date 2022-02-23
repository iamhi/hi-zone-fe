import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TitleComponent from '@components/TitleComponent';
import NavigationComponent from '@components/NavigationComponent';
import MoodComponent from '@components/MoodComponent';
import SpotifyComponent from '@components/SpotifyComponent';
import SocialMediaComponent from '@components/SocialMediaComponent';
import AboutRouteComponent from '@page-components/AboutRouteComponent';
import ZoneRouteComponent from '@page-components/ZoneRouteComponent';
import FooterComponent from '@components/FooterComponent';
import SupportingApplicationComponent from '@components/SupportingApplicationComponent';
import UserControlComponent from '@components/UserControlComponent';

const ABOUT_ROUTE = '/about';
const ZONE_ROUTE = '/';

const HomePageComponent = () => (
	<div className="basic-page">
		<div className="home-page">
			<div className="home-page__container home-page__container--left">
				<TitleComponent />

				<NavigationComponent />

				<Routes>
					<Route path={ABOUT_ROUTE} element={<AboutRouteComponent />} />

					<Route path={ZONE_ROUTE} element={<ZoneRouteComponent />} />
				</Routes>
			</div>

			<div className="home-page__container home-page__container--right">
				<MoodComponent />

				<SpotifyComponent />

				<SupportingApplicationComponent />

				<SocialMediaComponent />
			</div>

			<div className="home-page__footer">
				<FooterComponent />
			</div>

			<UserControlComponent />
		</div>
	</div>
);

export default HomePageComponent;
