import { configureStore } from '@reduxjs/toolkit';

import userPreferenceSlice from './slices/userPreferenceSlice';

export const store = configureStore({
	reducer: {
		userPreference: userPreferenceSlice,
	},
});
