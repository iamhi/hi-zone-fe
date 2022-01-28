import React from 'react';

const APPLICATION_URL = 'http://localhost:3001';

const ApplicationComponent = () => (
	<div className="application-component">
		<iframe scrolling="no" className="application-component__application-frame" src={APPLICATION_URL} title="application" />
	</div>
);

export default ApplicationComponent;
