import { configureStore } from '@reduxjs/toolkit';

import userPreferenceSlice from './slices/userPreferenceSlice';
import userDataSlice from './slices/userDataSlice';
import blogSlice from './slices/blogSlice';

export const store = configureStore({
	reducer: {
		userPreference: userPreferenceSlice,
		userData: userDataSlice,
		blog: blogSlice,
	},
});
