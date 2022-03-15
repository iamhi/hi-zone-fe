/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { getThemeNames } from '@theme/themeRegistry';

const DEFAULT_MOOD = 'Chill';
const ADDITIONAL_DEFAULT_MOODS = getThemeNames();
const LOCAL_STORAGE_MOOD_ITEM = 'hi-zone-state-mood';

const persistMood = (mood) => localStorage.setItem(LOCAL_STORAGE_MOOD_ITEM, mood);

const userPreferenceSlice = createSlice({
	name: 'userPreference',
	initialState: {
		mood: localStorage.getItem(LOCAL_STORAGE_MOOD_ITEM) || DEFAULT_MOOD,
		allMoods: [...ADDITIONAL_DEFAULT_MOODS],
	},
	reducers: {
		setMood(state, action) {
			state.mood = action.payload;

			persistMood(state.mood);
		},
		addMood(state, action) {
			state.allMoods.push(action.payload);
		},
		addAndSetMood(state, action) {
			state.allMoods.push(action.payload);
			state.mood = action.payload;

			persistMood(state.mood);
		},
		removeMood(state, action) {
			state.allMoods = state.allMoods.filter((mood) => mood !== action.payload);

			if (!state.allMoods.includes(DEFAULT_MOOD)) {
				state.allMoods.push(DEFAULT_MOOD);
			}

			if (state.mood === action.payload) {
				state.mood = DEFAULT_MOOD;

				persistMood(state.mood);
			}
		},
	},
});

export const {
	setMood,
	addMood,
	addAndSetMood,
	removeMood,
} = userPreferenceSlice.actions;

export const selectAllMoods = (state) => state.userPreference.allMoods;

export const selectCurrentMood = (state) => state.userPreference.mood;

export default userPreferenceSlice.reducer;
