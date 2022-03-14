import React from 'react';
import PropTypes from 'prop-types';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';

const EditCustomMoodPopupComponent = ({
	toggleAction,
}) => {
	const saveMoodAction = () => {
		console.warn('Saving mood');

		toggleAction();
	};

	console.warn({ saveMoodAction });

	return (
		<PopupDisplayComponent backgroundClick={toggleAction}>
			Editing custom mood;
		</PopupDisplayComponent>
	);
};

EditCustomMoodPopupComponent.propTypes = {
	toggleAction: PropTypes.func,
};

export default EditCustomMoodPopupComponent;
