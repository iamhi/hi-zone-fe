import React from 'react';
import PropTypes from 'prop-types';

import PopupDisplayComponent from '@common-components/PopupDisplayComponent';
import FormComponent from '@common-components/FormComponent';
import FormInputComponent from '@common-components/FormInputComponent';
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
}) => {
	const saveMoodAction = (event) => {
		const formData = new FormData(event.target);
		const newThemeData = Object.fromEntries(formData);

		toggleAction(newThemeData);
	};

	return (
		<PopupDisplayComponent backgroundClick={toggleAction}>
			<FormComponent onSubmit={saveMoodAction}>
				<FormInputComponent
					label="Primary color 1"
					require
					name={primaryColor1} />

				<FormInputComponent
					label="Primary color 2"
					name={primaryColor2} />

				<FormInputComponent
					label="Primary color 3"
					name={primaryColor3} />

				<FormInputComponent
					label="Background color"
					name={backgroundColor} />

				<FormInputComponent
					label="Background secondary color"
					name={backgroundSecondayColor} />

				<FormInputComponent
					label="Secondary color 1"
					name={secondaryColor1} />

				<FormInputComponent
					label="Secondary color 2"
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
};

export default EditCustomMoodPopupComponent;
