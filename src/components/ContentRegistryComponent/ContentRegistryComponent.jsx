import React from 'react';
import PropTypes from 'prop-types';

import componentRegistry from './componentRegistry';

const ContentRegistryComponent = ({
	contentData,
}) => (
	<>
		{contentData.map((element) => componentRegistry(element))}
	</>
);

ContentRegistryComponent.propTypes = {
	contentData: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.string,
		type: PropTypes.string,
		content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	})),
};

export default ContentRegistryComponent;
