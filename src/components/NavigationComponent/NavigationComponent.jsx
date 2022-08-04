import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAdmin, selectUsername } from '@redux/slices/userDataSlice';
import {
	APP_PREFIX,
	ABOUT_ROUTE,
	ZONE_ROUTE,
	BLOG_ROUTE,
	MESSAGEBOX_ROUTE,
} from '@page-components/constants';

import NavigationItemComponent from './NavigationItemComponent';

const NavigationComponent = () => {
	const { pathname } = useLocation();
	const isLogged = useSelector(selectUsername) !== '';
	const isAdmin = useSelector(selectIsAdmin);

	const adminRoutes = (
		<NavigationItemComponent linkTo={ZONE_ROUTE} selected={pathname === ZONE_ROUTE || pathname === APP_PREFIX}>
			Zone
		</NavigationItemComponent>
	);

	const loggedRoutes = (
		<NavigationItemComponent linkTo={MESSAGEBOX_ROUTE} selected={pathname === MESSAGEBOX_ROUTE}>
			Messagebox
		</NavigationItemComponent>
	);

	return (
		<div className="navigation-component">
			<NavigationItemComponent linkTo={ABOUT_ROUTE} selected={pathname === ABOUT_ROUTE}>
				About
			</NavigationItemComponent>

			<NavigationItemComponent linkTo={BLOG_ROUTE} selected={pathname === BLOG_ROUTE}>
				Blog
			</NavigationItemComponent>

			{isLogged && loggedRoutes}

			{isAdmin && adminRoutes}
		</div>
	);
};

export default NavigationComponent;
