import React, { useState } from 'react';

import EditCustomMoodPopupComponent from './EditCustomMoodPopupComponent';

const EditCustomMoodComponent = () => {
	const [isEditting, setEditting] = useState(false);

	return (
		<div>
			<button type="button" className="no-button-css mood-select-item-component" onClick={() => setEditting(true)}>
				<div className="mood-select-item-component__label">
					Custom theme
				</div>
			</button>
			{isEditting && <EditCustomMoodPopupComponent toggleAction={() => setEditting(false)} />}
		</div>
	);
};

export default EditCustomMoodComponent;
