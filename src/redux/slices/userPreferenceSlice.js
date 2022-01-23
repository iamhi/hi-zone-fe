/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_MOOD = 'Chill';
const ADDITIONAL_DEFAULT_MOODS = ['Hacker', 'Aggressive'];

const userPreferenceSlice = createSlice({
	name: 'userPreference',
	initialState: {
		mood: DEFAULT_MOOD,
		allMoods: [DEFAULT_MOOD, ...ADDITIONAL_DEFAULT_MOODS],
	},
	reducers: {
		setMood(state, action) {
			state.mood = action.payload;
		},
		addMood(state, action) {
			state.allMoods.push(action.payload);
		},
		addAndSetMood(state, action) {
			state.allMoods.push(action.payload);
			state.mood = action.payload;
		},
		removeMood(state, action) {
			state.allMoods = state.allMoods.filter((mood) => mood !== action.payload);

			if (!state.allMoods.includes(DEFAULT_MOOD)) {
				state.allMoods.push(DEFAULT_MOOD);
			}

			if (state.mood === action.payload) {
				state.mood = DEFAULT_MOOD;
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
