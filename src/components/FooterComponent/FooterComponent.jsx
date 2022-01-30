import React from 'react';

import footerContent from '@assets/content/footer-content.json';

import FooterItemComponent from './FooterItemComponent';

const FooterComponent = () => (
	<div className="footer-component">
		{footerContent.messages.map(({ key, message }) => <FooterItemComponent key={key}>{message}</FooterItemComponent>)}
	</div>
);

export default FooterComponent;
