import React from 'react';

import footerContent from '@assets/content/footer-content.json';

const FooterComponent = () => (
	<div className="footer-component">
		{footerContent.messages.map(({ format }) => <div key={Math.random()}>{format}</div>)}
	</div>
);

export default FooterComponent;
