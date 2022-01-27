import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setMood } from '@redux/slices/userPreferenceSlice';

const MoodSelectItemComponent = ({
	mood,
	hideSelect,
}) => {
	const dispatch = useDispatch();
	const onClickAction = useCallback(() => {
		dispatch(setMood(mood));
		hideSelect();
	}, [
		mood,
		dispatch,
		hideSelect,
	]);

	return (
		<button type="button" className="no-button-css mood-select-item-component" onClick={onClickAction}>
			<div className="mood-select-item-component__label">
				{mood}
			</div>
		</button>
	);
};

MoodSelectItemComponent.propTypes = {
	mood: PropTypes.string,
	hideSelect: PropTypes.func,
};

export default MoodSelectItemComponent;
