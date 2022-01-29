import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const NavigationItemComponent = ({
	linkTo,
	selected,
	children,
}) => (
	<Link
		to={linkTo}
		className={classNames('navigation-item-component', { 'navigation-item-component--selected': selected })}>
		{children}
	</Link>

);

NavigationItemComponent.propTypes = {
	linkTo: PropTypes.string,
	children: PropTypes.node,
	selected: PropTypes.bool,
};

export default NavigationItemComponent;
