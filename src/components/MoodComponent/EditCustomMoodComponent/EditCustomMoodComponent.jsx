import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import themeRegistry from '@theme/themeRegistry';
import { setMood } from '@redux/slices/userPreferenceSlice';

import EditCustomMoodPopupComponent from './EditCustomMoodPopupComponent';

const EditCustomMoodComponent = () => {
	const dispatch = useDispatch();
	const [isEditting, setEditting] = useState(false);

	const saveTheme = (themeData) => {
		setEditting(false);

		if (themeData) {
			themeRegistry.setCustomTheme(themeData);

			dispatch(setMood(themeRegistry.CUSTOM_THEME_NAME));
		}
	};

	return (
		<div>
			<button type="button" className="no-button-css mood-select-item-component" onClick={() => setEditting(true)}>
				<div className="mood-select-item-component__label">
					Create/Edit custom theme
				</div>
			</button>
			{isEditting && <EditCustomMoodPopupComponent toggleAction={saveTheme} />}
		</div>
	);
};

export default EditCustomMoodComponent;
