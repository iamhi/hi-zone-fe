import debounce from 'lodash.debounce';

const NOTE_APPLICATION_NOTE_KEY = 'note-application__note-key';

export const getNoteData = () => localStorage.getItem(NOTE_APPLICATION_NOTE_KEY) || '';

export const saveNoteData = debounce((value) => localStorage.setItem(NOTE_APPLICATION_NOTE_KEY, value), 500);

export const deleteNoteData = () => localStorage.removeItem(NOTE_APPLICATION_NOTE_KEY);
