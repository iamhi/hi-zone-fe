import React, { useState, useCallback } from 'react';

import CurrentMoodComponent from './CurrentMoodComponent';
import MoodSelectComponent from './MoodSelectComponent';

const MoodComponent = () => {
	const [showSelect, setShowSelect] = useState(false);
	const toggleSelect = useCallback(() => setShowSelect(!showSelect), [showSelect]);
	const hideSelect = useCallback(() => setShowSelect(false), []);

	return (
		<div className="mood-component">
			<div>Page mood:</div>
			<CurrentMoodComponent toggleSelect={toggleSelect} />

			{showSelect && <MoodSelectComponent hideSelect={hideSelect} />}
		</div>
	);
};

export default MoodComponent;
