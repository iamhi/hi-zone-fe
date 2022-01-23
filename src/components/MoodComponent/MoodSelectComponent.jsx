import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectAllMoods } from '@redux/slices/userPreferenceSlice';

import MoodSelectItemComponent from './MoodSelectItemComponent';

const MoodSelectComponent = ({
	hideSelect,
}) => {
	const allMoods = useSelector(selectAllMoods);

	return (
		<div className="mood-select-component">
			{allMoods.map((mood) => <MoodSelectItemComponent key={mood} mood={mood} hideSelect={hideSelect} />)}
		</div>
	);
};

MoodSelectComponent.propTypes = {
	hideSelect: PropTypes.func,
};

export default MoodSelectComponent;
