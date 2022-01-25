import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectAllMoods } from '@redux/slices/userPreferenceSlice';

import MoodSelectItemComponent from './MoodSelectItemComponent';

const MoodSelectComponent = ({
	hideSelect,
}) => {
	const selectElementRef = useRef();
	const allMoods = useSelector(selectAllMoods);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (selectElementRef.current && !selectElementRef.current.contains(event.target)) {
				hideSelect();
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => document.removeEventListener('click', handleClickOutside, true);
	}, [hideSelect]);

	return (
		<div className="mood-select-component" ref={selectElementRef}>
			{allMoods.map((mood) => <MoodSelectItemComponent key={mood} mood={mood} hideSelect={hideSelect} />)}
		</div>
	);
};

MoodSelectComponent.propTypes = {
	hideSelect: PropTypes.func,
};

export default MoodSelectComponent;
