import React from 'react';
import { useLocation } from 'react-router-dom';

import NavigationItemComponent from './NavigationItemComponent';

const ABOUT_ROUTE = '/';
const ZONE_ROUTE = '/zone';

const NavigationComponent = () => {
	const { pathname } = useLocation();

	return (
		<div className="navigation-component">
			<NavigationItemComponent linkTo={ABOUT_ROUTE} selected={pathname === ABOUT_ROUTE}>
				About
			</NavigationItemComponent>
			<NavigationItemComponent linkTo={ZONE_ROUTE} selected={pathname === ZONE_ROUTE}>
				Zone
			</NavigationItemComponent>
		</div>
	);
};

export default NavigationComponent;
