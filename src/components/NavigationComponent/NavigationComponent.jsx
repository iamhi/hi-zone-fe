import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAdmin } from '@redux/slices/userDataSlice';
import { ABOUT_ROUTE, ZONE_ROUTE, BLOG_ROUTE } from '@page-components/constants';
import NavigationItemComponent from './NavigationItemComponent';

const NavigationComponent = () => {
	const { pathname } = useLocation();
	const isAdmin = useSelector(selectIsAdmin);

	const adminRoutes = (
		<NavigationItemComponent linkTo={ZONE_ROUTE} selected={pathname === ZONE_ROUTE}>
			Zone
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

			{isAdmin && adminRoutes}
		</div>
	);
};

export default NavigationComponent;
