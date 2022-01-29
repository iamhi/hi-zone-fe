import React from 'react';
import { useLocation } from 'react-router-dom';

import NavigationItemComponent from './NavigationItemComponent';

const ZONE_ROUTE = '/';
const ABOUT_ROUTE = '/about';

const NavigationComponent = () => {
	const { pathname } = useLocation();

	return (
		<div className="navigation-component">
			<NavigationItemComponent linkTo={ZONE_ROUTE} selected={pathname === ZONE_ROUTE}>
				Zone
			</NavigationItemComponent>
			<NavigationItemComponent linkTo={ABOUT_ROUTE} selected={pathname === ABOUT_ROUTE}>
				About
			</NavigationItemComponent>
		</div>
	);
};

export default NavigationComponent;
