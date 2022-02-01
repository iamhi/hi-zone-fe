import React, { useState } from 'react';

import {
	getNoteData,
	saveNoteData,
} from './storage';

const NoteApplicationComponent = () => {
	const [noteData, setNoteData] = useState(getNoteData());

	const onChange = (event) => {
		const { target: { value } } = event;

		setNoteData(value);
		saveNoteData(value);
	};

	return (
		<div className="note-application-component">
			<textarea
				placeholder="Start typing..."
				className="note-application-component__text-area"
				value={noteData}
				onChange={onChange}>
			</textarea>
		</div>
	);
};

export default NoteApplicationComponent;
