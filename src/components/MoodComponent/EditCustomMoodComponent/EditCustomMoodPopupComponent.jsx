import React from 'react';
import PropTypes from 'prop-types';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import FormComponent from '@common-components/FormComponent';
import ManagedFormInputComponent from '@common-components/ManagedFormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';

const primaryColor1 = '--primary-color-1';
const primaryColor2 = '--primary-color-2';
const primaryColor3 = '--primary-color-3';
const backgroundColor = '--background-color';
const backgroundSecondayColor = '--background-secondary-color';
const secondaryColor1 = '--secondary-color-1';
const secondaryColor2 = '--secondary-color-2';

const EditCustomMoodPopupComponent = ({
	toggleAction,
	themeData,
}) => {
	const saveMoodAction = (event) => {
		if (event) {
			const formData = new FormData(event.target);
			const newThemeData = Object.fromEntries(formData);

			toggleAction(newThemeData);
		}

		toggleAction();
	};

	return (
		<PopupDisplayComponent backgroundClick={() => saveMoodAction()}>
			<FormComponent onSubmit={saveMoodAction}>
				<ManagedFormInputComponent
					label="Primary color 1"
					require
					value={themeData[primaryColor1]}
					name={primaryColor1} />

				<ManagedFormInputComponent
					label="Primary color 2"
					value={themeData[primaryColor2]}
					name={primaryColor2} />

				<ManagedFormInputComponent
					label="Primary color 3"
					value={themeData[primaryColor3]}
					name={primaryColor3} />

				<ManagedFormInputComponent
					label="Background color"
					value={themeData[backgroundColor]}
					name={backgroundColor} />

				<ManagedFormInputComponent
					label="Background secondary color"
					value={themeData[backgroundSecondayColor]}
					name={backgroundSecondayColor} />

				<ManagedFormInputComponent
					label="Secondary color 1"
					value={themeData[secondaryColor1]}
					name={secondaryColor1} />

				<ManagedFormInputComponent
					label="Secondary color 2"
					value={themeData[secondaryColor2]}
					name={secondaryColor2} />
				<FormSubmitComponent>
					Save
				</FormSubmitComponent>
			</FormComponent>
		</PopupDisplayComponent>
	);
};

EditCustomMoodPopupComponent.propTypes = {
	toggleAction: PropTypes.func,
	themeData: PropTypes.shape({
		key: PropTypes.string,
		value: PropTypes.string,
	}),
};

export default EditCustomMoodPopupComponent;
