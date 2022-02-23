import { configureStore } from '@reduxjs/toolkit';

import userPreferenceSlice from './slices/userPreferenceSlice';
import userDataSlice from './slices/userDataSlice';

export const store = configureStore({
	reducer: {
		userPreference: userPreferenceSlice,
		userData: userDataSlice,
	},
});
